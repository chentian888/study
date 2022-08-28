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
  // 绘制圆环
  function renderCircle() {
    const R = 150
    ctx.save()
    ctx.beginPath()
    ctx.arc(W / 2, H / 2, R, 0, Math.PI * 2)
    ctx.stroke()
    ctx.restore()
  }
  renderCircle()
  const ball = new Ball({ x: W / 2, y: H / 2, fillStyle: C.color() }).render(ctx)
  function move() {
    window.requestAnimationFrame(() => {
      move()
    })
    ctx.clearRect(0, 0, W, H)
    ball.x = W / 2 + 150 * Math.cos(ball.angle)
    ball.y = H / 2 + 150 * Math.sin(ball.angle)
    renderCircle()
    ball.render(ctx)
    ball.angle += 0.02
    ball.angle %= Math.PI * 2
  }
  move()
})
</script>

<style scoped>
.stageStyle {
  border: 1px solid #f00;
}
</style>
