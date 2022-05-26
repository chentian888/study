<template>
  <canvas class="stageStyle" id="stage"></canvas>
</template>

<script setup>
import { nextTick, onMounted } from 'vue'
import Atan from './utils/atan'
onMounted(async () => {
  await nextTick()
  const canvas = document.getElementById('stage')
  const ctx = canvas.getContext('2d')
  const W = (canvas.width = 800)
  const H = (canvas.height = 600)

  new Atan({ w: W, h: H, stage: canvas }).drawCoord(ctx).addMouseMoveEvent(ctx)
})
</script>

<style scoped>
.stageStyle {
  border: 1px solid #f00;
}
</style>
