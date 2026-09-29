<template>
  <v-row no-gutters>
    <v-col cols="3" class="blackBox"><span>Family</span></v-col>
    <v-col cols="8" />

    <v-col cols="4" class="bold"><span>Family Rank</span></v-col>
    <v-col cols="8" class="plainText"><span>{{ valueOf(options.family.rank, char.family.rank) }}</span></v-col>

    <v-col cols="4" class="bold"><span>Parents</span></v-col>
    <v-col cols="8" class="plainText"><span>{{ valueOf(options.family.parents, char.family.parents) }}</span></v-col>

    <v-col cols="4" class="bold"><span>Family status</span></v-col>
    <v-col cols="8" class="plainText"><span>{{ valueOf(options.family.status, char.family.status) }}</span></v-col>

    <v-col cols="4" class="bold"><span>Childhood Rank</span></v-col>
    <v-col cols="8" class="plainText"><span>{{ valueOf(options.family.childhood, char.family.childhood) }}</span></v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useCharacterContext } from '../../composables/characterProvider'

const { char, options } = useCharacterContext()

function valueOf(list: string[], index: number | null): string {
  return index !== null ? list[index] : ''
}
</script>
