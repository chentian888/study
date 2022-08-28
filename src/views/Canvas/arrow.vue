<template>
  <canvas class="stageStyle" id="stage"></canvas>
</template>

<script setup>
import { nextTick, onMounted } from 'vue'
import C from '../../canvas/utils'
import Arrow from '../../canvas/arrow2'
onMounted(async () => {
  await nextTick()
  const canvas = document.getElementById('stage')
  const ctx = canvas.getContext('2d')
  const W = (canvas.width = 800)
  const H = (canvas.height = 600)

  const arrow = new Arrow({ x: W / 2, y: H / 2, fillStyle: C.color() }).drawArrow(ctx).render(ctx)
})
</script>

<style scoped>
.stageStyle {
  border: 1px solid #f00;
}
</style>
