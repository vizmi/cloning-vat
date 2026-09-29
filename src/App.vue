<template>
  <v-app>
    <v-main>
      <v-container class="py-6">
        <v-card class="pa-4">
          <div class="d-flex align-center ga-2 mb-2">
            <v-btn icon="mdi-chevron-left" variant="text" :disabled="page === 0" @click="prev" />
            <v-stepper
              :model-value="page + 1"
              :items="pageNames"
              flat
              editable
              hide-actions
              alt-labels
              class="flex-grow-1"
              @update:model-value="(v) => (page = Number(v) - 1)"
            />
            <v-btn icon="mdi-chevron-right" variant="text" :disabled="page === pageNames.length - 1" @click="next" />
          </div>

          <ImportExportBar />
          <v-divider class="my-4" />

          <component :is="pageComponents[page]" />
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import options from './options'
import { useCharacter } from './composables/useCharacter'
import { useRollTree } from './composables/useRollTree'
import { CharacterKey } from './composables/characterProvider'
import ImportExportBar from './components/ImportExportBar.vue'
import StatsPage from './components/pages/StatsPage.vue'
import RoleSkillsPage from './components/pages/RoleSkillsPage.vue'
import StylePage from './components/pages/StylePage.vue'
import FamilyPage from './components/pages/FamilyPage.vue'
import MotivationPage from './components/pages/MotivationPage.vue'
import LifepathPage from './components/pages/LifepathPage.vue'
import CharacterSheetPage from './components/pages/CharacterSheetPage.vue'

const character = useCharacter(options)
const rollTree = useRollTree(character.char, options)
provide(CharacterKey, { ...character, ...rollTree })

const pageNames = [
  'Stats',
  'Role and Skills',
  'Style',
  'Family',
  'Motivation',
  'Lifepath',
  'Character sheet',
]
const pageComponents = [
  StatsPage,
  RoleSkillsPage,
  StylePage,
  FamilyPage,
  MotivationPage,
  LifepathPage,
  CharacterSheetPage,
]

const page = ref(0)

function prev(): void {
  page.value = Math.max(0, page.value - 1)
}

function next(): void {
  page.value = Math.min(pageNames.length - 1, page.value + 1)
}
</script>
