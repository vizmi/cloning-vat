import options from './options.js';
import Vue from 'vue/dist/vue.esm';
//import Vue from 'vue'; //this should work once we figured out the template compilation

var app = new Vue({
  components: {
    'spinner': {
      props: {
        label: { type: String, required: true },
        labelWidth: { type: Number, default: 120 },
        value: { type: Number, default: 0 },
        min:  { type: Number, default: 0 },
        max: { type: Number, default: 10 },
        step:  { type: Number, default: 1 },
        readOnly: { type: Boolean, default: false }
      },
      template:
        '<div class="field is-horizontal has-addons">' +
        '  <p class="control">' +
        '   <button type="button" class="button is-static" :style="labelStyle"> {{label}} </button>' +
        '  </p>' +
        '  <p class="control">' +
        '   <button type="button" v-if="!readOnly" class="button is-primary" style="width: 40px;"' +
        '    @click="decrement" :disabled="value <= min">' +
        '    <i class="fa fa-minus" aria-hidden="true"></i>' +
        '   </button>' +
        '  </p>' +
        '  <p class="control">' +
        '   <button type="button" class="button is-static" :style="valueStyle"> {{value}} </button>' +
        '  </p>' +
        '  <p class="control">' +
        '   <button type="button" v-if="!readOnly" class="button is-primary" style="width: 40px;"' +
        '    @click="increment" :disabled="value >= max">' +
        '    <i class="fa fa-plus" aria-hidden="true"></i>' +
        '   </button>' +
        '  </p>' +
        '</div>',
      data: function() {
        return {
          labelStyle: {
            width: this.labelWidth + 'px'
          },
          valueStyle: {
            width: (this.readOnly ? '120px' : '40px')
          }
        }
      },
      methods: {
        increment: function() {
          this.$emit('input', Math.min(this.value + this.step, this.max));
        },
        decrement: function() {
          this.$emit('input', Math.max(this.value - this.step, this.min));
        }
      }
    }
  },
  el: '#app',
  data: {
    options: options,
    pages: [
      'Stats',
      'Role and Skills',
      'Style',
      'Family',
      'Motivation',
      'Lifepath'
    ],
    page: 0,
    char: {
      role: undefined,
      characterPoints: 60,
      stats: {
        INT: 4,
        REF: 4,
        TECH: 4,
        COOL: 4,
        ATTR: 4,
        LUCK: 4,
        MA: 4,
        BODY: 4,
        EMP: 4
      },
      ability: 1,
      careerSkills: [],
      pickupSkills: [],
      style: {
        clothes: -1,
        hair: -1,
        affectations: -1
      },
      origin: -1,
      language: -1,
      family: {
        rank: -1,
        parents: -1,
        status: -1,
        childhood: -1
      },
      siblings: [],
      motivation: {
        personality: -1,
        person: -1,
        value: -1,
        people: -1,
        posession: -1
      },
      lifepath: {
        age: 21,
        events: []
      }
    }
  },
  computed: {
    cpSpent: function() {
      return (this.char.stats.INT + this.char.stats.REF + this.char.stats.TECH + this.char.stats.COOL +
        this.char.stats.ATTR + this.char.stats.LUCK + this.char.stats.MA + this.char.stats.BODY + this.char.stats.EMP);
    },
    cpLeft: function() {
      return this.char.characterPoints - this.cpSpent;
    },
    run: function() {
      return this.char.stats.MA * 3;
    },
    leap: function() {
      return this.run / 4;
    },
    lift: function() {
      return this.char.stats.BODY * 40;
    },
    btm: function() {
      var b = this.char.stats.BODY;
      if (b <= 2) return 0;
      else if (b <= 4) return -1;
      else if (b <= 7) return -2;
      else if (b <= 9) return -3;
      else return -4;
    },
    careerSkillPointsLeft: function() {
      return 40 - this.char.ability -
        this.char.careerSkills.reduce(function(acc, skill) { return acc + skill.v; }, 0);
    },
    pickupSkillPointsLeft: function() {
      return this.char.stats.INT + this.char.stats.REF -
        this.char.pickupSkills.reduce(function(acc, skill) { return acc + skill.v; }, 0);;
    },
    pickupSkillsAvailable: function() {
      return this.options.skills.map(function(s, i) {
        return { id: i, stat: s.stat, name: s.name };
      }, this).filter(function(s, i) {
        return !(
          this.char.careerSkills.some(function(cs) { return cs.id === s.id; }, this) ||
          this.char.pickupSkills.some(function(ps) { return ps.id === s.id; }, this)
        );
      }, this);
    }
  },
  watch: {
    "char.role": function(newRole) {
      this.char.ability = 1;
      this.char.careerSkills = [];
      this.char.pickupSkills = [];
      this.options.roles[newRole].skills.forEach(function(s) {
        this.char.careerSkills.push({
          id: s,
          v: 0
        });
      }, this);
    },
    cpLeft: function() {
      while (this.cpLeft < 0) {
        this.char.stats.INT = Math.max(this.char.stats.INT - 1, 1);
        this.char.stats.REF = Math.max(this.char.stats.REF - 1, 1);
        this.char.stats.TECH = Math.max(this.char.stats.TECH - 1, 1);
        this.char.stats.COOL = Math.max(this.char.stats.COOL - 1, 1);
        this.char.stats.ATTR = Math.max(this.char.stats.ATTR - 1, 1);
        this.char.stats.LUCK = Math.max(this.char.stats.LUCK - 1, 1);
        this.char.stats.MA = Math.max(this.char.stats.MA - 1, 1);
        this.char.stats.BODY = Math.max(this.char.stats.BODY - 1, 1);
        this.char.stats.EMP = Math.max(this.char.stats.EMP - 1, 1);
      }
    },
    pickupSkillPointsLeft: function() {
      while (this.pickupSkillPointsLeft < 0) {
        this.char.pickupSkills.forEach(function(s) { s.v = Math.max(s.v - 1, 0); });
      }
    }
  },
  methods: {
    d: function(size) {
      return Math.floor(Math.random() * size + 1);
    },
    roll: function(what) {
      switch (what) {

        case 'cp':
          var roll = 0;
          for (i = 0; i < 9; i++) {
            roll += this.d(10);
          }
          this.char.characterPoints = roll;
          break;

        case 'style':
          var roll = this.d(10)-1;
          this.char.style.clothes = roll;
          roll = this.d(10)-1;
          this.char.style.hair = roll;
          roll = this.d(10)-1;
          this.char.style.affectations = roll;
          break;

        case 'style.clothes':
          var roll = this.d(10)-1;
          this.char.style.clothes = roll;
          break;

        case 'style.hair':
          var roll = this.d(10)-1;
          this.char.style.hair = roll;
          break;

        case 'style.affectations':
          var roll = this.d(10)-1;
          this.char.style.affectations = roll;
          break;

        case 'origin':
          var roll = this.d(10)-1;
          this.char.origin = roll;
          this.char.language = -1;
          break;

        case 'family':
          var roll = this.d(10)-1;
          this.char.family.rank = roll;
          roll = this.d(10)-1;
          this.char.family.parents = roll;
          roll = this.d(10)-1;
          this.char.family.status = roll;
          roll = this.d(10)-1;
          this.char.family.childhood = roll;
          break;

        case 'family.rank':
          var roll = this.d(10)-1;
          this.char.family.rank = roll;
          break;

        case 'family.parents':
          var roll = this.d(10)-1;
          this.char.family.parents = roll;
          break;

        case 'family.status':
          var roll = this.d(10)-1;
          this.char.family.status = roll;
          break;

        case 'family.childhood':
          var roll = this.d(10)-1;
          this.char.family.childhood = roll;
          break;

        case 'siblings':
          this.char.siblings = [];
          roll = this.d(10);
          if (roll < 8) {
            for (var i = 0; i < roll; i++) {
              this.char.siblings.push(this.traverseRollTree('sibling'));
            }
          }
          break;

        case 'motivation':
          var roll = this.d(10)-1;
          this.char.motivation.personality = roll;
          roll = this.d(10)-1;
          this.char.motivation.person = roll;
          roll = this.d(10)-1;
          this.char.motivation.value = roll;
          roll = this.d(10)-1;
          this.char.motivation.people = roll;
          roll = this.d(10)-1;
          this.char.motivation.posession = roll;
          break;

        case 'motivation.personality':
          var roll = this.d(10)-1;
          this.char.motivation.personality = roll;
          break;

        case 'motivation.person':
          var roll = this.d(10)-1;
          this.char.motivation.person = roll;
          break;

        case 'motivation.value':
          var roll = this.d(10)-1;
          this.char.motivation.value = roll;
          break;

        case 'motivation.people':
          var roll = this.d(10)-1;
          this.char.motivation.people = roll;
          break;

        case 'motivation.posession':
          var roll = this.d(10)-1;
          this.char.motivation.posession = roll;
          break;

        case 'age':
          var roll = this.d(6) + this.d(6)  + 16;
          this.char.lifepath.age = roll;
          break;

        case 'lifepath':
          this.char.lifepath.events = [];
          for (var a = 16; a <= this.char.lifepath.age; a++) {
            var event = this.traverseRollTree('lifePath')
            this.char.lifepath.events.push(event);
          }
          break;
      }
    },
    traverseRollTree(start, startDie = 10) {
      const tree = this.options.rollTree;
      var result = [];
      var next = start;
      var nextDie = startDie;

      while(next) {
        var roll = this.d(nextDie);
        var rolled = tree[next].findIndex(function(e) { return e.rolls.includes(roll); });
        result.push(rolled);

        var i = tree[next][rolled];
        next = i.next;
        nextDie = i.nextDie || 10;
      }
      return result;
    },
    decodeRollTree(start, rolls, separator) {
      const tree = this.options.rollTree;
      var next = start;

      var result = rolls.reduce(function(result, item) {
        var i = tree[next][item];
        next = i.next;
        return result += i.text + separator;
      }, '');

      return result.slice(0, -separator.length);
    },
    addPickupSkill: function(event) {
      var s = Number(event.target.value);
      this.char.pickupSkills.push({
        id: s,
        v: 0
      });
      event.target.value = -1;
    },
    removeZeroPickupSkills: function() {
      this.char.pickupSkills = this.char.pickupSkills.filter(function(s) {
        return s.v > 0;
      }, this);
    },
    originChanged: function() {
      this.char.language = -1;
    }
  }
})
