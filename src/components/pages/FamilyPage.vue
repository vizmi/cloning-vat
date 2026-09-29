<template>
  <v-row>
    <v-col cols="12" md="7">
      <v-btn class="float-right" variant="tonal" @click="roll('family')">Roll all</v-btn>
      <h2 class="text-h5 mb-4">Family</h2>

      <div class="d-flex align-center ga-2 mb-4">
        <v-select
          style="max-width: 320px"
          label="Family Rank"
          :items="rankItems"
          :model-value="char.family.rank"
          @update:model-value="char.family.rank = $event"
        />
        <v-btn variant="tonal" @click="roll('family.rank')">Roll</v-btn>
      </div>

      <div class="d-flex align-center ga-2 mb-4">
        <v-select
          style="max-width: 320px"
          label="Parents"
          :items="parentsItems"
          :model-value="char.family.parents"
          @update:model-value="char.family.parents = $event"
        />
        <v-btn variant="tonal" @click="roll('family.parents')">Roll</v-btn>
      </div>

      <div class="d-flex align-center ga-2 mb-4">
        <v-select
          style="max-width: 320px"
          label="Family Status"
          :items="statusItems"
          :model-value="char.family.status"
          @update:model-value="char.family.status = $event"
        />
        <v-btn variant="tonal" @click="roll('family.status')">Roll</v-btn>
      </div>

      <div class="d-flex align-center ga-2 mb-4">
        <v-select
          style="max-width: 320px"
          label="Childhood"
          :items="childhoodItems"
          :model-value="char.family.childhood"
          @update:model-value="char.family.childhood = $event"
        />
        <v-btn variant="tonal" @click="roll('family.childhood')">Roll</v-btn>
      </div>
    </v-col>

    <v-col cols="12" md="5">
      <v-btn class="float-right" variant="tonal" @click="roll('siblings')">Roll all</v-btn>
      <h2 class="text-h5 mb-4">Siblings</h2>

      <div v-if="char.siblings.length === 0">You are the only child</div>
      <ul v-else>
        <li v-for="(s, i) in char.siblings" :key="i">{{ decodeSiblingPath(s) }}</li>
      </ul>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCharacterContext } from '../../composables/characterProvider'

const { char, options, roll, decodeSiblingPath } = useCharacterContext()

function toItems(labels: string[]) {
  return labels.map((title, value) => ({ title, value }))
}

const rankItems = computed(() => toItems(options.family.rank))
const parentsItems = computed(() => toItems(options.family.parents))
const statusItems = computed(() => toItems(options.family.status))
const childhoodItems = computed(() => toItems(options.family.childhood))
</script>
