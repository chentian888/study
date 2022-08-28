<template>
  <canvas class="stageStyle" id="stage"></canvas>
</template>

<script setup>
import { nextTick, onMounted } from 'vue'
import C from '../../canvas/utils'
import Ball from '../../canvas/ball'
onMounted(async () => {
  await nextTick()
  const canvas = document.getElementById('stage')
  const ctx = canvas.getContext('2d')
  const W = (canvas.width = 800)
  const H = (canvas.height = 600)

  const ball = new Ball({ x: 50, y: 50, vx: 0, vy: 0, fillStyle: C.color() }).render(ctx)

  // 加速度 ax是加速度 v+=vx vx+=ax
  function velocity() {
    window.requestAnimationFrame(() => {
      velocity()
    })
    ctx.clearRect(0, 0, W, H)
    // 方向
    const angle = 30

    // 30°方向上的加速度
    const a = 0.2
    const radian = C.toRad(angle)
    const ax = a * Math.cos(radian)
    const ay = a * Math.sin(radian)

    ball.x += ball.vx
    ball.y += ball.vy
    ball.vx += ax
    ball.vy += ay
    ball.render(ctx)
  }
  velocity()
})
</script>

<style scoped>
.stageStyle {
  border: 1px solid #f00;
}
</style>
