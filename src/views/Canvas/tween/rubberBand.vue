<template>
  <canvas class="stageStyle" id="stage"></canvas>
</template>

<script setup>
import { nextTick, onMounted } from 'vue'
import Ball from '../../../canvas/ball2'
import C from '../../../canvas/utils'

onMounted(async () => {
  await nextTick()
  const canvas = document.getElementById('stage')
  const ctx = canvas.getContext('2d')
  let W, H
  canvas.width = W = 1200
  canvas.height = H = 800

  const mouse = C.getOffset(canvas)
  // 弹动系数
  const spring = 0.05,
    friction = 0.95,
    g = 2.5

  const ball = new Ball({ x: W / 2, y: H / 2, r: 30, fillStyle: C.color() }).render(ctx)

  ;(function move() {
    window.requestAnimationFrame(move)
    ctx.clearRect(0, 0, W, H)
    ctx.beginPath()
    ctx.strokeStyle = '#f00'
    ctx.moveTo(mouse.x, mouse.y)
    ctx.lineTo(ball.x, ball.y)
    ctx.stroke()

    const dx = mouse.x - ball.x
    const dy = mouse.y - ball.y
    let ax = dx * spring
    let ay = dy * spring
    ball.vx += ax
    ball.vy += ay
    ball.vy += g

    ball.vx *= friction
    ball.vy *= friction

    ball.x += ball.vx
    ball.y += ball.vy
    ball.render(ctx)
  })()
})
</script>

<style scoped>
.stageStyle {
  border: 1px solid #f00;
}
</style>
