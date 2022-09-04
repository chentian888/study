<template>
  <canvas class="stageStyle" id="stage"></canvas>
</template>

<script setup>
import { nextTick, onMounted } from 'vue'
import Ball from '../../../canvas/ball2'
import { move } from '../../../canvas/boundaryBounce'
import C from '../../../canvas/utils'

onMounted(async () => {
  await nextTick()
  // 1.绘制2个小球
  // 2.绘制2个小球之间的连线
  const canvas = document.getElementById('stage')
  const ctx = canvas.getContext('2d')
  let W, H
  canvas.width = W = 1200
  canvas.height = H = 800

  const mouse = C.getOffset(canvas)
  let ball1IsMove = false
  let ball2IsMove = false
  // 弹动系数
  const spring = 0.03
  // 偏移量
  const springLen = 200
  // 摩擦系数为了让小球停下来
  const frication = 0.9

  const ball1 = new Ball({ x: C.random([50, W - 50]), y: C.random([50, H - 50]), r: 30, fillStyle: C.color() }).render(ctx)
  const ball2 = new Ball({ x: C.random([50, W - 50]), y: C.random([50, H - 50]), r: 30, fillStyle: C.color() }).render(ctx)
  canvas.addEventListener('mousedown', () => {
    const ball1IsPoint = ball1.isPoint(mouse)
    const ball2IsPoint = ball2.isPoint(mouse)
    if (ball1IsPoint) {
      ball1IsMove = true
    }
    if (ball2IsPoint) {
      ball2IsMove = true
    }
  })
  canvas.addEventListener('mousemove', BallMove)
  canvas.addEventListener('mouseup', BallStop)
  // 拖动小球
  function BallMove() {
    if (ball1IsMove) {
      ball1.x = mouse.x
      ball1.y = mouse.y
    }
    if (ball2IsMove) {
      ball2.x = mouse.x
      ball2.y = mouse.y
    }
  }

  // 小球弹动
  function BallBounce(b1, b2) {
    let dx = b2.x - b1.x
    let dy = b2.y - b1.y
    // console.log(b1, b1)
    const angle = Math.atan2(dy, dx)

    // 为防止小球重叠，需要定义小球之间的偏移量，将偏移量分解到x和y轴
    // 目标点减去偏移量得到最终的目标点
    const targetX = b2.x - springLen * Math.cos(angle)
    const targetY = b2.y - springLen * Math.sin(angle)

    b1.vx += (targetX - b1.x) * spring
    b1.vy += (targetY - b1.y) * spring

    // 摩擦系数为了让小球停下来
    b1.vx *= frication
    b1.vy *= frication

    b1.x += b1.vx
    b1.y += b1.vy
  }

  function BallStop() {
    ball1IsMove = false
    ball2IsMove = false
    // canvas.removeEventListener('mousemove', BallMove)
    // canvas.removeEventListener('mouseup', BallStop)
  }

  ;(function move() {
    window.requestAnimationFrame(move)
    ctx.clearRect(0, 0, W, H)
    if (!ball1IsMove) {
      // ball1向ball2弹动
      BallBounce(ball1, ball2)
    }
    if (!ball2IsMove) {
      // ball2向ball1弹动
      BallBounce(ball2, ball1)
    }
    ctx.beginPath()
    ctx.strokeStyle = '#f00'
    ctx.lineWidth = 3
    ctx.lineTo(ball1.x, ball1.y)
    ctx.lineTo(ball2.x, ball2.y)
    ctx.stroke()

    ball1.render(ctx)
    ball2.render(ctx)
  })()
})
</script>

<style scoped>
.stageStyle {
  background-color: #000;
}
</style>
