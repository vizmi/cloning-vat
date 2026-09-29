<template>
  <v-row>
    <v-col cols="12" md="7">
      <v-btn class="float-right" variant="tonal" @click="roll('style')">Roll all</v-btn>
      <h2 class="text-h5 mb-4">Style</h2>

      <div class="d-flex align-center ga-2 mb-4">
        <v-select
          style="max-width: 320px"
          label="Clothes"
          :items="clothesItems"
          :model-value="char.style.clothes"
          @update:model-value="char.style.clothes = $event"
        />
        <v-btn variant="tonal" @click="roll('style.clothes')">Roll</v-btn>
      </div>

      <div class="d-flex align-center ga-2 mb-4">
        <v-select
          style="max-width: 320px"
          label="Hair"
          :items="hairItems"
          :model-value="char.style.hair"
          @update:model-value="char.style.hair = $event"
        />
        <v-btn variant="tonal" @click="roll('style.hair')">Roll</v-btn>
      </div>

      <div class="d-flex align-center ga-2 mb-4">
        <v-select
          style="max-width: 320px"
          label="Affectations"
          :items="affectationsItems"
          :model-value="char.style.affectations"
          @update:model-value="char.style.affectations = $event"
        />
        <v-btn variant="tonal" @click="roll('style.affectations')">Roll</v-btn>
      </div>
    </v-col>

    <v-col cols="12" md="5">
      <h2 class="text-h5 mb-4">Origins</h2>

      <div class="d-flex align-center ga-2 mb-4">
        <v-select
          style="max-width: 320px"
          label="Origin"
          :items="originItems"
          :model-value="char.origin"
          @update:model-value="onOriginChange"
        />
        <v-btn variant="tonal" @click="roll('origin')">Roll</v-btn>
      </div>

      <div v-if="char.origin !== null" class="d-flex align-center ga-2">
        <v-select
          style="max-width: 320px"
          label="Language"
          :items="languageItems"
          :model-value="char.language"
          @update:model-value="char.language = $event"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCharacterContext } from '../../composables/characterProvider'

const { char, options, roll, originChanged } = useCharacterContext()

function toItems(labels: string[]) {
  return labels.map((title, value) => ({ title, value }))
}

const clothesItems = computed(() => toItems(options.style.clothes))
const hairItems = computed(() => toItems(options.style.hair))
const affectationsItems = computed(() => toItems(options.style.affectations))
const originItems = computed(() => toItems(options.origin.map((o) => o.name)))
const languageItems = computed(() => (char.value.origin !== null ? toItems(options.origin[char.value.origin].languages) : []))

function onOriginChange(value: unknown): void {
  if (typeof value === 'number') {
    char.value.origin = value
    originChanged()
  }
}
</script>
