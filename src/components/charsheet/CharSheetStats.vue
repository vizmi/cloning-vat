<template>
  <v-row no-gutters>
    <v-col cols="2" class="blackBox"><span>Stats</span></v-col>
    <v-col cols="10" />

    <template v-for="key in statKeys" :key="key">
      <v-col cols="1" class="bold">{{ key }}</v-col>
      <v-col cols="2">[ {{ char.stats[key] }} ]</v-col>
    </template>

    <v-col cols="1" class="bold">Run</v-col>
    <v-col cols="2">[ {{ run }} ]</v-col>

    <v-col cols="1" class="bold">Leap</v-col>
    <v-col cols="2">[ {{ leap }} ]</v-col>

    <v-col cols="1" class="bold">Lift</v-col>
    <v-col cols="2">[ {{ lift }} ]</v-col>

    <v-col cols="12">&nbsp;</v-col>

    <v-col cols="2" class="blackBox centered"><span>Save</span></v-col>
    <v-col cols="1" />
    <v-col cols="2" class="blackBox centered"><span>BTM</span></v-col>
    <v-col cols="7" />
    <v-col cols="2" class="entryField centered"><span class="bold">{{ char.stats.BODY }}</span></v-col>
    <v-col cols="1" />
    <v-col cols="2" class="entryField centered"><span class="bold">{{ btm }}</span></v-col>
    <v-col cols="7" />

    <v-col cols="12">&nbsp;</v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useCharacterContext } from '../../composables/characterProvider'
import type { StatKey } from '../../types/options'

const { char, run, leap, lift, btm } = useCharacterContext()

const statKeys: StatKey[] = ['INT', 'REF', 'TECH', 'COOL', 'ATTR', 'LUCK', 'MA', 'BODY', 'EMP']
</script>
