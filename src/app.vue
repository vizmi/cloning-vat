<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="box">
          <nav class="pagination">
            <a class="pagination-previous" :disabled="page === 0" @click="page = Math.max(0, page-1)">
              <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </a>
            <a class="pagination-next" :disabled="page === pages.length-1" @click="page = Math.min(pages.length-1, page+1)">
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </a>

            <ul class="pagination-list">
              <li>
                <div class="file">
                  <label class="file-label">
                    <input class="file-input" type="file" name="import" @change="importCharacter">
                    <span class="pagination-link"> Import </span>
                  </label>
                </div>
              </li>
              <li v-for="(p,i) in pages">
                <a class="pagination-link" :class="{'is-current': page === i}" @click="page = i"> {{p}} </a>
              </li>
              <li>
                <a class="pagination-link" @click="exportCharacter()"> Export </a>
              </li>
            </ul>
          </nav>
          <hr>

          <div v-if="page === 0">
            <h4 class="title is-4"> Character points </h4>
            <div class="field is-grouped">
                <p class="control">
                  <spinner label="Character points" :label-width="200" :min="10" :max="90" :step="5"
                    v-model:value="char.characterPoints">
                  </spinner>
                </p>
                <p class="control">
                  <button type="button" class="button" @click="roll('cp')"> Roll </button>
                </p>
            </div>
            <hr>
            <h4 class="title is-4"> Statistics </h4>
            <div class="columns is-multiline">
              <div class="column is-narrow" v-for="(s, i) in options.stats" :key="i">
                <spinner :label="i" :label-width="200"
                  :min="1" :max="Math.min(10, char.stats[i] + cpLeft)" :step="1"
                  v-model:value="char.stats[i]">
                </spinner>
              </div>
              <div class="column is-narrow">
                <spinner label="Run" read-only :label-width="200" :value="run">
                </spinner>
              </div>
              <div class="column is-narrow">
                <spinner label="Leap" read-only :label-width="200" :value="leap">
                </spinner>
              </div>
              <div class="column is-narrow">
                <spinner label="Lift" read-only :label-width="200" :value="lift">
                </spinner>
              </div>
              <div class="column is-narrow">
                <spinner label="Save" read-only :label-width="200" :value="char.stats.BODY">
                </spinner>
              </div>
              <div class="column is-narrow">
                <spinner label="BTM" read-only :label-width="200" :value="btm">
                </spinner>
              </div>
            </div>

            <div><strong>{{cpLeft}}&nbsp;</strong> points remaining </div>
          </div>

          <div v-if="page === 1">
            <h4 class="title is-4"> Role </h4>
            <div class="field has-addons">
              <p class="control" v-for="(r, i) in options.roles" :key="i">
                <button class="button" :class="{'is-primary': char.role === i}" @click="setRole(i)">
                  {{r.name}}
                </button>
              </p>
            </div>
            <hr>

            <div v-if="typeof char.role !== 'undefined'">

              <h4 class="title is-4"> Career skills </h4>
              <div class="columns is-multiline">
                <div class="column is-narrow">
                  <spinner :label="options.roles[char.role].ability" :label-width="200"
                    :min="1" :max="Math.min(10, char.ability + careerSkillPointsLeft)" v-model:value="char.ability">
                  </spinner>
                </div>
                <div class="column is-narrow" v-for="(s, i) in char.careerSkills" :key="s.id">
                  <spinner :label="options.skills[s.id].name" :label-width="200"
                    :max="Math.min(10, char.careerSkills[i].v + careerSkillPointsLeft)"
                    v-model:value="char.careerSkills[i].v">
                  </spinner>
                </div>
              </div>
              <div><strong>{{careerSkillPointsLeft}}&nbsp;</strong> points remaining </div>
              <hr>

              <h4 class="title is-4"> Pickup skills </h4>
              <div class="field is-horizontal">
                <div class="field-body">
                  <p class="control">
                    <span class="select">
                      <select style="width: 317px;" @change="addPickupSkill">
                        <option disabled selected value="-1"> Pick a new skill </option>
                        <option v-for="s in pickupSkillsAvailable" :value="s.id">
                          [{{s.stat}}] {{s.name}}
                        </option>
                      </select>
                    </span>
                  </p>
                </div>
              </div>
              <div class="columns is-multiline">
                <div class="column is-narrow" v-for="(s, i) in char.pickupSkills" :key="s.id">
                  <spinner :label="options.skills[s.id].name" :label-width="200"
                    :max="Math.min(10, char.pickupSkills[i].v + pickupSkillPointsLeft)"
                    v-model:value="char.pickupSkills[i].v">
                  </spinner>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <button type="button" class="button" @click="removeZeroPickupSkills"> Remove 0 Skills </button>
                    </div>
                  </div>
                </div>
              </div>
              <div><strong> {{pickupSkillPointsLeft}} &nbsp;</strong> points remaining </div>
            </div>
          </div>

          <div v-if="page === 2">
            <div class="columns">
              <div class="column is-7">
                <button type="button" class="button is-pulled-right" @click="roll('style')"> Roll all </button>
                <h4 class="title is-4"> Style </h4>

                <div class="field">
                  <label class="label"> Clothes </label>
                  <p class="control">
                    <span class="select">
                      <select id="style.clothes" v-model="char.style.clothes">
                        <option disabled selected :value="-1"> Choose </option>
                        <option v-for="(s, i) in options.style.clothes" :value="i">
                          {{s}}
                        </option>
                      </select>
                    </span>
                    <button type="button" class="button" @click="roll('style.clothes')"> Roll </button>
                  </p>
                </div>

                <div class="field">
                  <label class="label"> Hair </label>
                    <p class="control">
                      <span class="select">
                        <select id="style.hair" v-model="char.style.hair">
                          <option disabled selected :value="-1"> Choose </option>
                          <option v-for="(s, i) in options.style.hair" :value="i">
                            {{s}}
                          </option>
                        </select>
                      </span>
                      <button type="button" class="button" @click="roll('style.hair')"> Roll </button>
                    </p>
                </div>

                <div class="field">
                  <label class="label"> Affectations </label>
                  <p class="control">
                    <span class="select">
                      <select id="style.affectations" v-model="char.style.affectations">
                        <option disabled selected :value="-1"> Choose </option>
                        <option v-for="(s, i) in options.style.affectations" :value="i">
                          {{s}}
                        </option>
                      </select>
                    </span>
                    <button type="button" class="button" @click="roll('style.affectations')"> Roll </button>
                  </p>
                </div>
              </div>

              <div class="column is-5">
                <h4 class="title is-4"> Origins </h4>
                <div class="field">
                  <label class="label"> Origin </label>
                  <p class="control">
                    <span class="select">
                      <select id="origin" v-model="char.origin" @change="originChanged">
                        <option disabled selected :value="-1"> Choose </option>
                        <option v-for="(s, i) in options.origin" :value="i">
                          {{s.name}}
                        </option>
                      </select>
                    </span>
                    <button type="button" class="button" @click="roll('origin')"> Roll </button>
                  </p>
                </div>

                <div class="field"  v-if="char.origin>=0">
                  <label class="label"> Language </label>
                  <div class="field is-grouped">
                    <p class="control">
                      <span class="select">
                        <select id="language" v-model="char.language">
                          <option disabled selected :value="-1"> Choose </option>
                          <option v-for="(s, i) in options.origin[char.origin].languages" :value="i">
                            {{s}}
                          </option>
                        </select>
                      </span>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div v-if="page === 3">
            <div class="columns">
              <div class="column is-7">
                <button type="button" class="button is-pulled-right" @click="roll('family')"> Roll all </button>
                <h4 class="title is-4"> Family </h4>

                <div class="field">
                  <label class="label"> Family Rank </label>
                  <p class="control">
                    <span class="select">
                      <select id="family.rank" v-model="char.family.rank">
                        <option disabled selected :value="-1"> Choose </option>
                        <option v-for="(s, i) in options.family.rank" :value="i">
                          {{s}}
                        </option>
                      </select>
                    </span>
                    <button type="button" class="button" @click="roll('family.rank')"> Roll </button>
                  </p>
                </div>

                <div class="field">
                  <label class="label"> Parents </label>
                  <p class="control">
                    <span class="select">
                      <select id="family.parents" v-model="char.family.parents">
                        <option disabled selected :value="-1"> Choose </option>
                        <option v-for="(s, i) in options.family.parents" :value="i">
                          {{s}}
                        </option>
                      </select>
                    </span>
                    <button type="button" class="button" @click="roll('family.parents')"> Roll </button>
                  </p>
                </div>

                <div class="field">
                  <label class="label"> Family Status </label>
                  <p class="control">
                    <span class="select">
                      <select id="family.status" v-model="char.family.status">
                        <option disabled selected :value="-1"> Choose </option>
                        <option v-for="(s, i) in options.family.status" :value="i">
                          {{s}}
                        </option>
                      </select>
                    </span>
                    <button type="button" class="button" @click="roll('family.status')"> Roll </button>
                  </p>
                </div>

                <div class="field">
                  <label class="label"> Childhood </label>
                  <p class="control">
                    <span class="select">
                      <select id="family.childhood" v-model="char.family.childhood">
                        <option disabled selected :value="-1"> Choose </option>
                        <option v-for="(s, i) in options.family.childhood" :value="i">
                          {{s}}
                        </option>
                      </select>
                    </span>
                    <button type="button" class="button" @click="roll('family.childhood')"> Roll </button>
                  </p>
                </div>
              </div>

              <div class="column is-5">
                <button type="button" class="button is-pulled-right" @click="roll('siblings')"> Roll all </button>
                <h4 class="title is-4"> Siblings </h4>

                <div v-if="char.siblings.length === 0">You are the only child</div>
                <div class="content" v-if="char.siblings.length > 0">
                  <ul>
                    <li v-for="s in char.siblings"> {{ decodeRollTree('sibling', s, ' ') }} </li>
                  </ul>
                </div>

              </div>

            </div>
          </div>

          <div v-if="page === 4">
            <div class="columns">
              <div class="column is-7">

                <button type="button" class="button is-pulled-right" @click="roll('motivation')"> Roll all </button>
                <h4 class="title is-4"> Motivation </h4>

                <div class="field">
                  <label class="label"> Personality </label>
                  <p class="control">
                    <span class="select">
                      <select id="motivation.personality" v-model="char.motivation.personality">
                        <option disabled selected :value="-1"> Choose </option>
                        <option v-for="(s, i) in options.motivation.personality" :value="i">
                          {{s}}
                        </option>
                      </select>
                    </span>
                    <button type="button" class="button" @click="roll('motivation.personality')"> Roll </button>
                  </p>
                </div>

                <div class="field">
                  <label class="label"> Person you value most </label>
                    <p class="control">
                      <span class="select">
                        <select id="motivation.person" v-model="char.motivation.person">
                          <option disabled selected :value="-1"> Choose </option>
                          <option v-for="(s, i) in options.motivation.person" :value="i">
                            {{s}}
                          </option>
                        </select>
                      </span>
                      <button type="button" class="button" @click="roll('motivation.person')"> Roll </button>
                    </p>
                </div>

                <div class="field">
                  <label class="label"> What do you value most </label>
                  <p class="control">
                    <span class="select">
                      <select id="motivation.value" v-model="char.motivation.value">
                        <option disabled selected :value="-1"> Choose </option>
                        <option v-for="(s, i) in options.motivation.value" :value="i">
                          {{s}}
                        </option>
                      </select>
                    </span>
                    <button type="button" class="button" @click="roll('motivation.value')"> Roll </button>
                  </p>
                </div>

                <div class="field">
                  <label class="label"> How do you feel about most people? </label>
                  <p class="control">
                    <span class="select">
                      <select id="motivation.people" v-model="char.motivation.people">
                        <option disabled selected :value="-1"> Choose </option>
                        <option v-for="(s, i) in options.motivation.people" :value="i">
                          {{s}}
                        </option>
                      </select>
                    </span>
                    <button type="button" class="button" @click="roll('motivation.people')"> Roll </button>
                  </p>
                </div>

                <div class="field">
                  <label class="label"> Your most valued posession </label>
                  <p class="control">
                    <span class="select">
                      <select id="motivation.posession" v-model="char.motivation.posession">
                        <option disabled selected :value="-1"> Choose </option>
                        <option v-for="(s, i) in options.motivation.posession" :value="i">
                          {{s}}
                        </option>
                      </select>
                    </span>
                    <button type="button" class="button" @click="roll('motivation.posession')"> Roll </button>
                  </p>
                </div>

              </div>
            </div>
          </div>

          <div v-if="page === 5">
            <div class="columns">
              <div class="column is-12">
                <h4 class="title is-4"> Age </h4>
                <div class="field is-grouped">
                  <p class="control">
                    <spinner id="age" label="Age" :label-width="200" :min="16" :max="50"
                      v-model:value="char.lifepath.age">
                    </spinner>
                  </p>
                  <p class="control">
                    <button type="button" class="button" @click="roll('age')"> Roll </button>
                  </p>
                </div>
                <hr>

                <button type="button" class="button is-pulled-right" @click="roll('lifepath')"> Roll </button>
                <h4 class="title is-4"> Lifepath </h4>

                <div v-if="char.lifepath.events.length === 0"> No events to show </div>
                <div class="content" v-if="char.lifepath.events.length > 0">
                  <dl>
                    <dt v-for="(e, i) in char.lifepath.events">
                      <strong> {{i+16}}: </strong> {{ decodeRollTree('lifePath', e, ' - ') }}
                    </dt>
                  </dl>
                </div>

              </div>
            </div>
          </div>

        </div> <!-- box -->
      </div>
    </section>
  </div>
</template>

<script>
  import options from './options.js';
  import spinner from './spinner.vue';
  import LZString from 'lz-string';
  import { saveAs } from 'file-saver';

  export default {
    name: 'app',
    components: { 'spinner' : spinner },
    data: function() {
      return {
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
      setRole: function(newRole) {
        if (newRole === this.char.role) {
          return;
        }
        console.log('resetting the skills');
        this.char.ability = 1;
        this.char.careerSkills = [];
        this.char.pickupSkills = [];
        this.options.roles[newRole].skills.forEach(function(s) {
          this.char.careerSkills.push({
            id: s,
            v: 0
          });
        }, this);
        this.char.role = newRole;
      },
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
      },
      importCharacter(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        self = this;
        reader.addEventListener('loadend', function() {
          var compressed = reader.result;
          var json = LZString.decompressFromUTF16(compressed);
          console.log(json);
          if (json === null) {
            alert('file cannot be decoded');
            return;
          }
          var char = JSON.parse(json);
          self.$set(self, 'char', char);
        });
        reader.readAsText(file);
      },
      exportCharacter() {
        var json = JSON.stringify(this.char);
        console.log(json);
        var compressed = LZString.compressToUTF16(json);
        console.log(compressed);
        var blob = new Blob([compressed], {type: 'text/plain;charset=utf-16'});
        var fn = prompt('File name:', 'character.txt');
        if (fn === null) return;
        saveAs(blob, fn);
      }
    }
  }
</script>
