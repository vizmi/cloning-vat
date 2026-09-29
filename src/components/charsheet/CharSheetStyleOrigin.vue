<template>
  <v-row no-gutters>
    <v-col cols="3" class="blackBox"><span>Style</span></v-col>
    <v-col cols="8" />

    <v-col cols="4" class="bold"><span>Clothes</span></v-col>
    <v-col cols="8" class="plainText"><span>{{ valueOf(options.style.clothes, char.style.clothes) }}</span></v-col>

    <v-col cols="4" class="bold"><span>Hair</span></v-col>
    <v-col cols="8" class="plainText"><span>{{ valueOf(options.style.hair, char.style.hair) }}</span></v-col>

    <v-col cols="4" class="bold"><span>Affections</span></v-col>
    <v-col cols="8" class="plainText"><span>{{ valueOf(options.style.affectations, char.style.affectations) }}</span></v-col>

    <v-col cols="4" class="bold"><span>Ethnicity</span></v-col>
    <v-col cols="8" class="plainText">
      <span v-if="char.origin !== null">{{ options.origin[char.origin].name }}</span>
    </v-col>

    <v-col cols="4" class="bold"><span>Language</span></v-col>
    <v-col cols="8" class="plainText">
      <span v-if="char.origin !== null && char.language !== null">
        {{ options.origin[char.origin].languages[char.language] }}
      </span>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useCharacterContext } from '../../composables/characterProvider'

const { char, options } = useCharacterContext()

function valueOf(list: string[], index: number | null): string {
  return index !== null ? list[index] : ''
}
</script>
