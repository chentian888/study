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

  const ball = new Ball({ x: W / 2, y: 50, vx: 0, vy: 0, fillStyle: C.color() }).render(ctx)
  // 重力加速度
  function move() {
    const id = window.requestAnimationFrame(() => {
      move()
    })
    ctx.clearRect(0, 0, W, H)

    // 垂直方向上的加速度
    const ay = 0.2

    ball.y += ball.vy
    ball.vy += ay
    if (ball.y + ball.r >= H) {
      ball.y = H - ball.r
      ball.vy *= -0.9
    }
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
