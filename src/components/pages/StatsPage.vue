<template>
  <div>
    <h2 class="text-h5 mb-4">Character points</h2>
    <div class="d-flex align-center ga-4 mb-4">
      <PointSpinner
        label="Character points"
        :label-width="200"
        :min="10"
        :max="90"
        :step="5"
        :model-value="char.characterPoints"
        @update:model-value="char.characterPoints = $event"
      />
      <v-btn variant="tonal" @click="roll('cp')">Roll</v-btn>
    </div>
    <v-divider class="mb-4" />

    <h2 class="text-h5 mb-4">Statistics</h2>
    <v-row>
      <v-col v-for="(name, key) in options.stats" :key="key" cols="auto">
        <PointSpinner
          :label="key"
          :label-width="200"
          :min="1"
          :max="Math.min(10, char.stats[key] + cpLeft)"
          :step="1"
          :model-value="char.stats[key]"
          @update:model-value="char.stats[key] = $event"
        />
      </v-col>
      <v-col cols="auto">
        <PointSpinner label="Run" read-only :label-width="200" :model-value="run" />
      </v-col>
      <v-col cols="auto">
        <PointSpinner label="Leap" read-only :label-width="200" :model-value="leap" />
      </v-col>
      <v-col cols="auto">
        <PointSpinner label="Lift" read-only :label-width="200" :model-value="lift" />
      </v-col>
      <v-col cols="auto">
        <PointSpinner label="Save" read-only :label-width="200" :model-value="char.stats.BODY" />
      </v-col>
      <v-col cols="auto">
        <PointSpinner label="BTM" read-only :label-width="200" :model-value="btm" />
      </v-col>
    </v-row>

    <div><strong>{{ cpLeft }}&nbsp;</strong> points remaining</div>
  </div>
</template>

<script setup lang="ts">
import PointSpinner from '../PointSpinner.vue'
import { useCharacterContext } from '../../composables/characterProvider'

const { char, options, cpLeft, run, leap, lift, btm, roll } = useCharacterContext()
</script>
