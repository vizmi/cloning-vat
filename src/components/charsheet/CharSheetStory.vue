<template>
  <v-row no-gutters>
    <v-col cols="2" class="blackBox"><span>Story</span></v-col>
    <v-col cols="10" />
    <v-col cols="12" class="entryField">
      <textarea v-model="char.story" rows="4" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useCharacterContext } from '../../composables/characterProvider'

const { char } = useCharacterContext()
</script>
