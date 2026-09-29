<template>
  <v-row>
    <v-col cols="12" md="7">
      <v-btn class="float-right" variant="tonal" @click="roll('motivation')">Roll all</v-btn>
      <h2 class="text-h5 mb-4">Motivation</h2>

      <div class="d-flex align-center ga-2 mb-4">
        <v-select
          style="max-width: 360px"
          label="Personality"
          :items="personalityItems"
          :model-value="char.motivation.personality"
          @update:model-value="char.motivation.personality = $event"
        />
        <v-btn variant="tonal" @click="roll('motivation.personality')">Roll</v-btn>
      </div>

      <div class="d-flex align-center ga-2 mb-4">
        <v-select
          style="max-width: 360px"
          label="Person you value most"
          :items="personItems"
          :model-value="char.motivation.person"
          @update:model-value="char.motivation.person = $event"
        />
        <v-btn variant="tonal" @click="roll('motivation.person')">Roll</v-btn>
      </div>

      <div class="d-flex align-center ga-2 mb-4">
        <v-select
          style="max-width: 360px"
          label="What do you value most"
          :items="valueItems"
          :model-value="char.motivation.value"
          @update:model-value="char.motivation.value = $event"
        />
        <v-btn variant="tonal" @click="roll('motivation.value')">Roll</v-btn>
      </div>

      <div class="d-flex align-center ga-2 mb-4">
        <v-select
          style="max-width: 360px"
          label="How do you feel about most people?"
          :items="peopleItems"
          :model-value="char.motivation.people"
          @update:model-value="char.motivation.people = $event"
        />
        <v-btn variant="tonal" @click="roll('motivation.people')">Roll</v-btn>
      </div>

      <div class="d-flex align-center ga-2 mb-4">
        <v-select
          style="max-width: 360px"
          label="Your most valued posession"
          :items="posessionItems"
          :model-value="char.motivation.posession"
          @update:model-value="char.motivation.posession = $event"
        />
        <v-btn variant="tonal" @click="roll('motivation.posession')">Roll</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCharacterContext } from '../../composables/characterProvider'

const { char, options, roll } = useCharacterContext()

function toItems(labels: string[]) {
  return labels.map((title, value) => ({ title, value }))
}

const personalityItems = computed(() => toItems(options.motivation.personality))
const personItems = computed(() => toItems(options.motivation.person))
const valueItems = computed(() => toItems(options.motivation.value))
const peopleItems = computed(() => toItems(options.motivation.people))
const posessionItems = computed(() => toItems(options.motivation.posession))
</script>
