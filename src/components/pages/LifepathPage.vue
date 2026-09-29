<template>
  <v-row>
    <v-col cols="12">
      <h2 class="text-h5 mb-4">Age</h2>
      <div class="d-flex align-center ga-2 mb-4">
        <PointSpinner
          label="Age"
          :label-width="200"
          :min="16"
          :max="50"
          :model-value="char.lifepath.age"
          @update:model-value="char.lifepath.age = $event"
        />
        <v-btn variant="tonal" @click="roll('age')">Roll</v-btn>
      </div>
      <v-divider class="mb-4" />

      <v-btn class="float-right" variant="tonal" @click="roll('lifepath')">Roll</v-btn>
      <h2 class="text-h5 mb-4">Lifepath</h2>

      <div v-if="char.lifepath.events.length === 0">No events to show</div>
      <dl v-else>
        <dt v-for="(e, i) in char.lifepath.events" :key="i">
          <strong>{{ i + 16 }}:</strong> {{ decodeLifepathEvent(e) }}
        </dt>
      </dl>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import PointSpinner from '../PointSpinner.vue'
import { useCharacterContext } from '../../composables/characterProvider'

const { char, roll, decodeLifepathEvent } = useCharacterContext()
</script>
