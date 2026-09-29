<template>
  <v-row no-gutters>
    <v-col cols="3" class="blackBox"><span>Siblings</span></v-col>
    <v-col cols="1" />
    <v-col cols="1" class="bold"><span><v-icon icon="mdi-gender-male" size="small" /></span></v-col>
    <v-col cols="2" class="entryField centered"><span>{{ siblingGenderCount(0) }}</span></v-col>
    <v-col cols="1" />
    <v-col cols="1" class="bold"><span><v-icon icon="mdi-gender-female" size="small" /></span></v-col>
    <v-col cols="2" class="entryField centered"><span>{{ siblingGenderCount(1) }}</span></v-col>
    <v-col cols="2" />

    <v-col v-if="char.siblings.length === 0" cols="12">You are the only child</v-col>
    <v-col v-else cols="12">
      <ul>
        <li v-for="(s, i) in char.siblings" :key="i">{{ decodeSiblingPath(s) }}</li>
      </ul>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useCharacterContext } from '../../composables/characterProvider'

const { char, siblingGenderCount, decodeSiblingPath } = useCharacterContext()
</script>
