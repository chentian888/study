<template>
  <div id="canvas">
    <canvas class="stageStyle" id="stage"></canvas>
  </div>
</template>

<script setup>
import { nextTick, onMounted } from 'vue'
import MathAtant from '../canvas/atan'
import Arrow from '../canvas/arrow'
import Ball from '../canvas/ball'
import Ball2 from '../canvas/ball2'
import C from '../canvas/utils'

onMounted(async () => {
  await nextTick()
  // 象限取值范围
  // const testMathAtant = new MathAtant()
  // testMathAtant.init()

  // 箭头转动
  // const arrow = new Arrow()
  // arrow.drawArrow().render()
  // arrow.rotateArrow()
  // arrow.flowMouseAndRotate()
  // arrow.autoRotate()

  // const ball = new Ball({w: canvasW,h:canvasH})
  // const ball = new Ball({ w: canvasW,h:canvasH,x: 50, y: 50 })
  // ball.renderCircle()
  // ball.renderEllipse()
  // ball.render()

  // ball.moveBetweenLeftAndRight()
  // ball.moveUpAndDown()
  // ball.scaleXY()
  // ball.moveCircle()
  // ball.moveEllipse()
  // ball.vector()
  // ball.velocity()
  // ball.jump()

  // 运动边界

  const canvas = document.getElementById('stage')
  const ctx = canvas.getContext('2d')
  const W = (canvas.width = 800)
  const H = (canvas.height = 600)

  const ballList = []
  for (let i = 0; i < 10; i++) {
    // const r = Math.random() > 0.9 ? C.random([20, 50]) : C.random([10, 30])
    ballList.push(
      new Ball2({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 20 + 30,
        fillStyle: C.color(),
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3
      })
    )
  }

  function ballMove(ball, index) {
    ball.x += ball.vx
    ball.y += ball.vy

    if (ball.x - ball.r >= W || ball.x + ball.r <= 0 || ball.y - ball.r >= H || ball.Y + ball.r <= 0) {
      ballList.splice(index, 1)
      console.log('移除', ball)
    }
    ball.render(ctx)
  }

  function move() {
    window.requestAnimationFrame(() => {
      move()
    })
    ctx.clearRect(0, 0, W, H)
    let len = ballList.length
    while (len--) {
      ballMove(ballList[len], len)
    }
  }
  move()
})
</script>

<style scoped>
#canvas {
  text-align: center;
}
.stageStyle {
  border: 1px solid #f00;
}
</style>
