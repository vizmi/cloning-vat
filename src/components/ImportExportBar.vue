<template>
  <div class="d-flex align-center ga-2 flex-wrap">
    <v-file-input
      label="Import"
      accept=".txt,.json"
      density="compact"
      hide-details
      style="max-width: 280px"
      prepend-icon=""
      prepend-inner-icon="mdi-upload"
      @update:model-value="onImport"
    />
    <v-btn variant="tonal" @click="showExportDialog = true">Export</v-btn>

    <v-dialog v-model="showExportDialog" max-width="420">
      <v-card title="Export character">
        <v-card-text>
          <v-text-field v-model="filename" label="File name" autofocus @keyup.enter="confirmExport" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn variant="text" @click="showExportDialog = false">Cancel</v-btn>
          <v-btn color="primary" variant="tonal" @click="confirmExport">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="showError" color="error" timeout="5000">
      {{ errorMessage }}
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCharacterContext } from '../composables/characterProvider'
import { exportCharacter, importCharacterFromFile } from '../composables/useCharacterIO'

const { char, loadCharacter } = useCharacterContext()

const showExportDialog = ref(false)
const filename = ref('character.txt')
const showError = ref(false)
const errorMessage = ref('')

function confirmExport(): void {
  exportCharacter(char.value, filename.value || 'character.txt')
  showExportDialog.value = false
}

async function onImport(files: File | File[] | null): Promise<void> {
  const file = Array.isArray(files) ? files[0] : files
  if (!file) return

  try {
    const imported = await importCharacterFromFile(file)
    loadCharacter(imported)
  } catch (err) {
    errorMessage.value = err instanceof Error ? err.message : 'Failed to import character'
    showError.value = true
  }
}
</script>
