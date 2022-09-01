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
  const mouse = C.getOffset(canvas)
  let diffX = 0,
    diffY = 0

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
    canvas.removeEventListener('mousemove', BallMove)
    canvas.removeEventListener('mouseup', BallStop)
  }

  ;(function move() {
    window.requestAnimationFrame(() => {
      move()
    })

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
