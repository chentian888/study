<template>
  <canvas class="stageStyle" id="stage"></canvas>
</template>

<script setup>
import { nextTick, onMounted } from 'vue'
import C from './utils'
import Ball from './utils/ball'
onMounted(async () => {
  await nextTick()
  const canvas = document.getElementById('stage')
  const ctx = canvas.getContext('2d')
  const W = (canvas.width = 800)
  const H = (canvas.height = 600)

  const ball = new Ball({ x: W / 2, y: H / 2, fillStyle: C.color() }).render(ctx)

  function move() {
    // 运动距离
    const swing = 190
    window.requestAnimationFrame(() => {
      move()
    })

    ctx.clearRect(0, 0, W, H)
    ball.x = W / 2 + Math.sin(ball.angle) * swing
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
