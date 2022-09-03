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

  // 存放鼠标在圆球内部时鼠标x/y的坐标与圆球中心点的x/y的坐标的距离
  let diffX = 0,
    diffY = 0

  // 存放速度向量
  let vx = C.random([-10, 10]),
    vy = -10,
    // 重力加速度
    g = 0.2,
    // 到达边界后衰减系数
    bounce = -0.8

  // 鼠标是否在移动
  let isMouseMove = false

  let preVal = { x: 0, y: 0 }

  const ball = new Ball({
    x: W / 2,
    y: H / 2,
    r: C.random([20, 80]),
    fillStyle: C.color()
  }).render(ctx)

  // 监听鼠标事件
  canvas.addEventListener('mousedown', (e) => {
    e.preventDefault()
    // 鼠标位置在小球体内
    const isPoint = ball.isPoint(mouse)
    if (isPoint) {
      isMouseMove = true
      diffX = mouse.x - ball.x
      diffY = mouse.y - ball.y
      console.log(diffX, diffY)
      preVal.x = mouse.x
      preVal.y = mouse.y
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

  // 小球自动运动
  function BallAnimation() {
    // 从下面的位置移动上面可以防止小球一直上下不停跳动问题
    vy += g
    ball.x += vx
    ball.y += vy
    // vy += g

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

  // 投掷动画
  function setSpeed() {
    // 投掷动画的要点是需要记录投掷瞬时的加速度
    // 加速度的计算方式是记录旧的鼠标点然后减去新的投掷时的坐标点
    vx = ball.x - preVal.x
    vy = ball.y - preVal.y
    preVal.x = ball.x
    preVal.y = ball.y
  }

  ;(function move() {
    window.requestAnimationFrame(() => {
      move()
    })
    if (!isMouseMove) {
      BallAnimation()
    } else {
      setSpeed()
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
