<template>
  <canvas class="stageStyle" id="stage"></canvas>
</template>

<script setup>
import { nextTick, onMounted } from 'vue'
import Ball from '../../../canvas/ball2'
import C from '../../../canvas/utils'

onMounted(async () => {
  //   await nextTick()
  const canvas = document.getElementById('stage')
  const ctx = canvas.getContext('2d')
  let W = 0,
    H = 0
  canvas.width = W = 1200
  canvas.height = H = 800

  const mouse = C.getOffset(canvas)
  let easing = 0.04
  let isMouseMove = false
  let targetX = W / 2
  let targetY = H / 2
  let dx = 0
  let dy = 0

  const ball = new Ball({
    x: W / 2,
    y: H / 2,
    r: 30,
    fillStyle: C.color()
  }).render(ctx)

  canvas.addEventListener('mousedown', (e) => {
    e.preventDefault()
    if (ball.isPoint(mouse)) {
      isMouseMove = true
      canvas.addEventListener('mousemove', BallMove)
      canvas.addEventListener('mouseup', BallStop)
    }
  })

  //   小球跟随鼠标移动
  function BallMove() {
    ball.x = mouse.x
    ball.y = mouse.y
  }

  //   解绑事件
  function BallStop() {
    isMouseMove = false
    BallBackAnimation()
    canvas.removeEventListener('mousemove', BallMove)
    canvas.removeEventListener('mouseup', BallStop)
  }

  function BallBackAnimation() {
    const dx = (targetX - ball.x) * easing
    const dy = (targetY - ball.y) * easing
    ball.x += dx
    ball.y += dy
  }

  ;(function move() {
    window.requestAnimationFrame(() => {
      move()
    })
    ctx.clearRect(0, 0, W, H)
    if (!isMouseMove) {
      BallBackAnimation()
    }

    ball.render(ctx)
  })()
})
</script>

<style scoped>
.stageStyle {
  border: 1px solid #f00;
}
</style>
