<template>
  <v-row no-gutters>
    <v-col cols="5" class="blackBox"><span>Motivation</span></v-col>
    <v-col cols="7" />

    <v-col cols="6" class="bold"><span>Personality</span></v-col>
    <v-col cols="6" class="plainText"><span>{{ valueOf(options.motivation.personality, char.motivation.personality) }}</span></v-col>

    <v-col cols="6" class="bold"><span>Person you value most</span></v-col>
    <v-col cols="6" class="plainText"><span>{{ valueOf(options.motivation.person, char.motivation.person) }}</span></v-col>

    <v-col cols="6" class="bold"><span>What do you value most?</span></v-col>
    <v-col cols="6" class="plainText"><span>{{ valueOf(options.motivation.value, char.motivation.value) }}</span></v-col>

    <v-col cols="6" class="bold"><span>How do you feel about most people?</span></v-col>
    <v-col cols="6" class="plainText"><span>{{ valueOf(options.motivation.people, char.motivation.people) }}</span></v-col>

    <v-col cols="6" class="bold"><span>Your most valued posession</span></v-col>
    <v-col cols="6" class="plainText"><span>{{ valueOf(options.motivation.posession, char.motivation.posession) }}</span></v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useCharacterContext } from '../../composables/characterProvider'

const { char, options } = useCharacterContext()

function valueOf(list: string[], index: number | null): string {
  return index !== null ? list[index] : ''
}
</script>
