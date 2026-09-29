<template>
  <v-row no-gutters>
    <v-col cols="4" class="blackBox"><span>Skills</span></v-col>
    <v-col cols="8" />

    <v-col v-if="char.role !== null" cols="12">
      <b>{{ options.roles[char.role].ability }}:</b> {{ char.ability }}
    </v-col>

    <template v-for="s in char.careerSkills" :key="`career-${s.id}`">
      <v-col v-if="s.v !== 0" cols="12"><b>{{ options.skills[s.id].name }}:</b> {{ s.v }}</v-col>
    </template>
    <template v-for="s in char.pickupSkills" :key="`pickup-${s.id}`">
      <v-col v-if="s.v !== 0" cols="12"><b>{{ options.skills[s.id].name }}:</b> {{ s.v }}</v-col>
    </template>
  </v-row>
</template>

<script setup lang="ts">
import { useCharacterContext } from '../../composables/characterProvider'

const { char, options } = useCharacterContext()
</script>
