<template>
  <v-row no-gutters>
    <v-col cols="2" class="blackBox"><span>Life events</span></v-col>
    <v-col cols="10" />
    <v-col v-if="char.lifepath.events.length > 0" cols="12">
      <dl>
        <dt v-for="(e, i) in char.lifepath.events" :key="i">
          <strong>{{ i + 16 }}:</strong> {{ decodeLifepathEvent(e) }}
        </dt>
      </dl>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useCharacterContext } from '../../composables/characterProvider'

const { char, decodeLifepathEvent } = useCharacterContext()
</script>
