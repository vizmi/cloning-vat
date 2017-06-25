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
        '   <button type="button" v-if="!readOnly" class="button is-info" style="width: 40px;"' +
        '    @click="decrement" :disabled="value <= min">' +
        '    <i class="fa fa-minus" aria-hidden="true"></i>' +
        '   </button>' +
        '  </p>' +
        '  <p class="control">' +
        '   <button type="button" class="button is-static" :style="valueStyle"> {{value}} </button>' +
        '  </p>' +
        '  <p class="control">' +
        '   <button type="button" v-if="!readOnly" class="button is-info" style="width: 40px;"' +
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
    static: static,
    showing: 0,
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
        this.char.careerSkills.reduce(function(acc, skill) { return acc + skill.value; }, 0);
    },
    pickupSkillPointsLeft: function() {
      return this.char.stats.INT + this.char.stats.REF -
        this.char.pickupSkills.reduce(function(acc, skill) { return acc + skill.value; }, 0);;
    },
    pickupSkillsAvailable: function() {
      return this.static.skills.map(function(s, i) {
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
      this.static.roles[newRole].skills.forEach(function(s) {
        this.char.careerSkills.push({
          id: s,
          value: 0
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
        this.char.pickupSkills.forEach(function(s) { s.value = Math.max(s.value - 1, 0); });
      }
    }
  },
  methods: {
    d: function(size) {
      return Math.floor(Math.random() * 10 + 1);
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
          this.rollItem('style.clothes');
          this.rollItem('style.hair');
          this.rollItem('style.affectations');
          break;

        case 'origin':
          this.rollItem('origin');
          this.char.language = -1;
          break;

        case 'family':
          this.rollItem('family.rank');
          this.rollItem('family.parents');
          this.rollItem('family.status');
          this.rollItem('family.childhood');
          break;

        case 'siblings':
          this.char.siblings = [];
          roll = this.d(10);
          if (roll < 8) {
            for (var i = 0; i < roll; i++) {
              this.char.siblings.push(this.rollSibling());
            }
          }
          break;

        case 'motivation':
          this.rollItem('motivation.personality');
          this.rollItem('motivation.person');
          this.rollItem('motivation.value');
          this.rollItem('motivation.people');
          this.rollItem('motivation.posession');
          break;

        default:
          this.rollItem(what);
      }
    },
    rollItem: function(what) {
      var roll = this.d(10)-1;
      document.getElementById(what).value = roll;
      this.char[what] = roll;
    },
    rollSibling: function() {
      result = '';
      roll = this.d(10);
      if (roll < 6) {
        result += 'older ';
      } else if (roll < 10) {
        result += 'younger ';
      } else {
        result += 'twin ';
      }
      result += this.d(2) === 1 ? 'brother ' : 'sister ';
      roll = this.d(10);
      if (roll < 3) {
        result += 'who dislikes you';
      } else if (roll < 5) {
        result += 'who likes you';
      } else if (roll < 7) {
        result += 'who is neutral towards you';
      } else if (roll < 9) {
        result += 'who hero worships you';
      } else {
        result += 'who hates you';
      }
      return result;
    },
    rollLifePath: function() {
      var x = 'main';
      var result = '';
      while (x !== null) {
        var roll = this.d(10);
        var rolled = this.static.lifePath[x].find(function(e) { return e.numbers.includes(roll); });
        result += rolled.name  + ' - ';

        x = rolled.next;
      }
      return result.slice(0, -3);
    },
    addPickupSkill: function(event) {
      var s = Number(event.target.value);
      this.char.pickupSkills.push({
        id: s,
        value: 0
      });
      event.target.value = -1;
    },
    removeZeroPickupSkills: function() {
      this.char.pickupSkills = this.char.pickupSkills.filter(function(s) {
        return s.value > 0;
      }, this);
    },
    originChanged: function() {
      this.char.language = -1;
    }
  }
})
