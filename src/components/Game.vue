<template>
  <div class="row" v-for="row in gameRow" :key="row">
    <div class="col" v-for="col in  gameCol" :key="col">
      <Box :type="map[row-1][col-1]"></Box>
    </div>
  </div>

</template>

<script setup>
import {reactive} from "vue"
import {gameRow, gameCol, startGame} from '../game'
import Box from './Box.vue'

const map = reactive({})
startGame(map)
</script>

<style scoped>
.row {
  display: flex;
}
</style>