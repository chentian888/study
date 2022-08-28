<template>
  <canvas class="stageStyle" id="stage"></canvas>
</template>

<script setup>
import { nextTick, onMounted } from 'vue'
import C from '../../canvas/utils'
import Ball from '../../canvas/ball2'
onMounted(async () => {
  await nextTick()
  const canvas = document.getElementById('stage')
  const ctx = canvas.getContext('2d')
  const W = (canvas.width = 800)
  const H = (canvas.height = 600)

  const ball = new Ball({ x: W / 2, y: H / 2, fillStyle: C.color() }).render(ctx)
  function move() {
    window.requestAnimationFrame(() => {
      move()
    })
    const swing = 1
    ctx.clearRect(0, 0, W, H)
    ball.r += Math.sin(ball.angle) * swing
    ball.angle += 0.05
    ball.angle %= Math.PI * 2
    ball.render(ctx)
  }
  move()
})
</script>

<style scoped>
.stageStyle {
  border: 1px solid #f00;
}
</style>
