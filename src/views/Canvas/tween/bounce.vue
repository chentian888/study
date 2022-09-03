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
  let W = 0,
    H = 0
  canvas.width = W = 1200
  canvas.height = H = 800

  //   缓动系数-非时间系数
  let easing = 0.02

  //   摩擦力系数
  let friction = 0.95

  const targetX = W / 2

  const ball = new Ball({
    x: 80,
    y: H / 2,
    r: 30,
    fillStyle: C.color()
  }).render(ctx)

  ;(function move() {
    window.requestAnimationFrame(() => {
      move()
    })
    ctx.clearRect(0, 0, W, H)

    let dx = (targetX - ball.x) * easing
    // 永动
    // ball.vx += dx
    // ball.x += ball.vx

    // 会停止
    ball.vx += dx
    ball.vx *= friction
    ball.x += ball.vx

    ball.render(ctx)
  })()
})
</script>

<style scoped>
.stageStyle {
  border: 1px solid #f00;
}
</style>
