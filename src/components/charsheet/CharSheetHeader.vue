<template>
  <v-row no-gutters>
    <v-col cols="2" class="blackBox"><span>Handle</span></v-col>
    <v-col cols="10" class="entryField"><input v-model="char.handle" /></v-col>

    <v-col cols="2" class="blackBox"><span>Role</span></v-col>
    <v-col cols="10" class="plainText">
      <span class="bold" v-if="char.role !== null">{{ options.roles[char.role].name }}</span>
    </v-col>

    <v-col cols="5" class="blackBox"><span>Character points</span></v-col>
    <v-col cols="1" class="entryField centered"><span>{{ char.characterPoints }}</span></v-col>
    <v-col cols="2" class="blackBox"><span>Age</span></v-col>
    <v-col cols="1" class="entryField centered"><span>{{ char.lifepath.age }}</span></v-col>
    <v-col cols="3" />
  </v-row>
</template>

<script setup lang="ts">
import { useCharacterContext } from '../../composables/characterProvider'

const { char, options } = useCharacterContext()
</script>
