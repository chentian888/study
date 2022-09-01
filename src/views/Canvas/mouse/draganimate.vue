<template>
  <canvas class="stageStyle" id="stage"></canvas>
</template>

<script setup>
import { onMounted } from 'vue'
import Ball from '../../../canvas/ball2'
import C from '../../../canvas/utils'
onMounted(() => {
  const canvas = document.getElementById('stage')
  const ctx = canvas.getContext('2d')
  let W = 0,
    H = 0
  canvas.width = W = 800
  canvas.height = H = 600
  //   鼠标在canvas中的坐标
  const mouse = C.getOffset(canvas)
  let diffX = 0,
    diffY = 0

  let vx = C.random([-10, 10]),
    vy = -10,
    g = 0.2,
    bounce = -0.8

  let isMouseMove = false

  const ball = new Ball({
    x: W / 2,
    y: H / 2,
    r: C.random([20, 80]),
    fillStyle: C.color()
  }).render(ctx)

  //   监听鼠标事件
  canvas.addEventListener('mousedown', (e) => {
    e.preventDefault()
    // 鼠标位置在小球体内
    const isPoint = ball.isPoint(mouse)
    if (isPoint) {
      isMouseMove = true
      diffX = mouse.x - ball.x
      diffY = mouse.y - ball.y
      console.log(diffX, diffY)

      canvas.addEventListener('mousemove', BallMove)
      canvas.addEventListener('mouseup', BallStop)
    }
  })

  //   小球移动
  function BallMove() {
    // - diffX/- diffY用于修复鼠标拖动时圆球中心会瞬间移动到鼠标当前所在位置
    ball.x = mouse.x - diffX
    ball.y = mouse.y - diffY
  }

  function BallStop() {
    isMouseMove = false
    canvas.removeEventListener('mousemove', BallMove)
    canvas.removeEventListener('mouseup', BallStop)
  }

  //   小球自动运动
  function BallAnimation() {
    ball.x += vx
    ball.y += vy
    vy += g
    // x轴越界判断
    if (ball.x + ball.r >= W) {
      ball.x = W - ball.r
      vx *= bounce
    } else if (ball.x - ball.r <= 0) {
      ball.x = ball.r
      vx *= bounce
    }

    // y轴越界判断
    if (ball.y + ball.r >= H) {
      ball.y = H - ball.r
      vy *= bounce
    } else if (ball.y - ball.r <= 0) {
      ball.y = ball.r
      vy *= bounce
    }
  }

  ;(function move() {
    window.requestAnimationFrame(() => {
      move()
    })
    if (!isMouseMove) {
      BallAnimation()
    }
    ctx.clearRect(0, 0, W, H)
    ball.render(ctx)
  })()
})
</script>

<style scoped>
.stageStyle {
  border: 1px solid #f00;
}
</style>
