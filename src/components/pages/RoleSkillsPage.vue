<template>
  <div>
    <h2 class="text-h5 mb-4">Role</h2>
    <div class="d-flex flex-wrap ga-2 mb-4">
      <v-btn
        v-for="(r, i) in options.roles"
        :key="i"
        :color="char.role === i ? 'primary' : undefined"
        @click="setRole(i)"
      >
        {{ r.name }}
      </v-btn>
    </div>
    <v-divider class="mb-4" />

    <div v-if="char.role !== null">
      <h2 class="text-h5 mb-4">Career skills</h2>
      <v-row class="mb-2">
        <v-col cols="auto">
          <PointSpinner
            :label="options.roles[char.role].ability"
            :label-width="200"
            :min="1"
            :max="Math.min(10, char.ability + careerSkillPointsLeft)"
            :model-value="char.ability"
            @update:model-value="char.ability = $event"
          />
        </v-col>
        <v-col v-for="(s, i) in char.careerSkills" :key="s.id" cols="auto">
          <PointSpinner
            :label="options.skills[s.id].name"
            :label-width="200"
            :max="Math.min(10, char.careerSkills[i].v + careerSkillPointsLeft)"
            :model-value="char.careerSkills[i].v"
            @update:model-value="char.careerSkills[i].v = $event"
          />
        </v-col>
      </v-row>
      <div class="mb-4"><strong>{{ careerSkillPointsLeft }}&nbsp;</strong> points remaining</div>
      <v-divider class="mb-4" />

      <h2 class="text-h5 mb-4">Pickup skills</h2>
      <v-select
        class="pickup-skill-select"
        style="max-width: 360px"
        label="Pick a new skill"
        :items="pickupSkillItems"
        :model-value="null"
        @update:model-value="onAddPickupSkill"
      />

      <v-row class="mt-2">
        <v-col v-for="(s, i) in char.pickupSkills" :key="s.id" cols="auto">
          <PointSpinner
            :label="options.skills[s.id].name"
            :label-width="200"
            :max="Math.min(10, char.pickupSkills[i].v + pickupSkillPointsLeft)"
            :model-value="char.pickupSkills[i].v"
            @update:model-value="char.pickupSkills[i].v = $event"
          />
        </v-col>
      </v-row>

      <v-btn class="mt-2" variant="tonal" @click="removeZeroPickupSkills">Remove 0 Skills</v-btn>
      <div class="mt-2"><strong>{{ pickupSkillPointsLeft }}&nbsp;</strong> points remaining</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import PointSpinner from '../PointSpinner.vue'
import { useCharacterContext } from '../../composables/characterProvider'

const { char, options, careerSkillPointsLeft, pickupSkillPointsLeft, pickupSkillsAvailable, setRole, addPickupSkill, removeZeroPickupSkills } =
  useCharacterContext()

const pickupSkillItems = computed(() =>
  pickupSkillsAvailable.value.map((s) => ({ title: `[${s.stat}] ${s.name}`, value: s.id })),
)

function onAddPickupSkill(skillId: unknown): void {
  if (typeof skillId === 'number') addPickupSkill(skillId)
}
</script>
