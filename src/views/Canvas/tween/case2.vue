<template>
  <canvas class="stageStyle" id="stage"></canvas>
</template>

<script setup>
import { nextTick, onMounted } from 'vue'
import Arrow from '../../../canvas/arrow2'
import C from '../../../canvas/utils'

onMounted(async () => {
  await nextTick()
  const canvas = document.getElementById('stage')
  const ctx = canvas.getContext('2d')
  let W, H
  canvas.width = W = 1200
  canvas.height = H = 800
  const mouse = C.getOffset(canvas)

  let easing = 0.05
  const arrow = new Arrow({
    x: W / 2,
    y: H / 2,
    w: 120,
    h: 50
  }).render(ctx)

  ;(function move() {
    window.requestAnimationFrame(() => {
      move()
    })
    ctx.clearRect(0, 0, W, H)

    const dx = mouse.x - arrow.x
    const dy = mouse.y - arrow.y
    const angle = Math.atan2(dy, dx)
    arrow.x += dx * easing
    arrow.y += dy * easing
    arrow.rotation = angle

    arrow.render(ctx)
  })()
})
</script>

<style scoped>
.stageStyle {
  border: 1px solid #f00;
}
</style>
