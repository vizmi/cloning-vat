<template>
  <div id="charSheet">
    <v-row>
      <v-col cols="12" md="6">
        <CharSheetHeader />
        <CharSheetStats />
        <CharSheetSkills />
      </v-col>
      <v-col cols="12" md="6">
        <v-row no-gutters>
          <v-col cols="4" class="blackBack" />
          <v-col cols="4" class="centered blackBack"><img src="/CyberPunk.gif" alt="Cyberpunk" /></v-col>
          <v-col cols="4" class="blackBack" />
        </v-row>
        <CharSheetMotivation />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <CharSheetStyleOrigin />
      </v-col>
      <v-col cols="12" md="4">
        <CharSheetFamily />
      </v-col>
      <v-col cols="12" md="4">
        <CharSheetSiblings />
      </v-col>
    </v-row>

    <CharSheetLifeEvents />
    <CharSheetStory />
  </div>
</template>

<script setup lang="ts">
import CharSheetHeader from '../charsheet/CharSheetHeader.vue'
import CharSheetStats from '../charsheet/CharSheetStats.vue'
import CharSheetSkills from '../charsheet/CharSheetSkills.vue'
import CharSheetMotivation from '../charsheet/CharSheetMotivation.vue'
import CharSheetStyleOrigin from '../charsheet/CharSheetStyleOrigin.vue'
import CharSheetFamily from '../charsheet/CharSheetFamily.vue'
import CharSheetSiblings from '../charsheet/CharSheetSiblings.vue'
import CharSheetLifeEvents from '../charsheet/CharSheetLifeEvents.vue'
import CharSheetStory from '../charsheet/CharSheetStory.vue'
</script>
