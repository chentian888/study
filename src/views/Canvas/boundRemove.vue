<template>
  <canvas class="stageStyle" id="stage"></canvas>
</template>

<script setup>
import { nextTick, onMounted } from 'vue'
import { init, boundaryRemove } from '../../canvas/boundaryRemove'
onMounted(async () => {
  await nextTick()
  init()
  boundaryRemove()
})
</script>

<style scoped>
.stageStyle {
  border: 1px solid #f00;
}
</style>
