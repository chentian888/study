<template>
  <canvas class="stageStyle" id="stage"></canvas>
</template>

<script setup>
import { nextTick, onMounted } from 'vue'
import Ball2 from '../../../canvas/ball2'
import C from '../../../canvas/utils'

onMounted(async () => {
  await nextTick()
  const canvas = document.getElementById('stage')
  const ctx = canvas.getContext('2d')
  let W, H
  canvas.width = W = 1200
  canvas.height = H = 800

  const mouse = C.getOffset(canvas)
  const balls = []

  // 弹动系数
  const spring = 0.03

  // 魔法系数
  const friction = 0.9

  // 偏移系数
  const springLen = 200

  // 当前正被拖动的小球
  let draggedBall = null

  function initBalls() {
    for (let i = 0; i < 8; i++) {
      const ball = new Ball2({ x: C.random([15, W - 15]), y: C.random([15, H - 15]), r: 20, fillStyle: C.color() })
      ball.isMouseMove = false
      balls.push(ball)
    }
  }

  initBalls()

  canvas.addEventListener('mousedown', () => {
    for (let ball of balls) {
      if (ball.isPoint(mouse)) {
        ball.isMouseMove = true
        draggedBall = ball
      }
    }
  })

  canvas.addEventListener('mousemove', () => {
    if (draggedBall) {
      draggedBall.x = mouse.x
      draggedBall.y = mouse.y
    }
  })

  canvas.addEventListener('mouseup', () => {
    if (draggedBall) {
      draggedBall.isMouseMove = false
      draggedBall = null
    }
  })

  function springTo(ball, targetBall) {
    const target = balls.find((ele) => ele.isMouseMove)
    const dx = targetBall.x - ball.x
    const dy = targetBall.y - ball.y
    const angle = Math.atan2(dy, dx)

    const x = targetBall.x - springLen * Math.cos(angle)
    const y = targetBall.y - springLen * Math.sin(angle)

    ball.vx += (x - ball.x) * spring
    ball.vy += (y - ball.y) * spring

    ball.vx *= friction
    ball.vy *= friction

    ball.x += ball.vx
    ball.y += ball.vy
  }

  ;(function move() {
    window.requestAnimationFrame(() => {
      move()
    })
    ctx.clearRect(0, 0, W, H)
    ctx.beginPath()
    ctx.strokeStyle = 'green'
    ctx.lineWidth = 3
    for (let ball of balls) {
      // ball.render(ctx)
      ctx.lineTo(ball.x, ball.y)
    }
    ctx.closePath()
    ctx.stroke()

    balls.forEach((ball, i) => {
      if (!ball.isMouseMove) {
        let arrTemp = balls.slice()
        arrTemp.splice(i, 1)
        for (let target of arrTemp) {
          springTo(ball, target)
        }
      }
      ball.render(ctx)
    })
  })()
})
</script>

<style scoped>
.stageStyle {
  background-color: #000;
}
</style>
