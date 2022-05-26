<template>
  <div id="canvas">
    <canvas class="stageStyle" id="stage"></canvas>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { nextTick, onMounted } from 'vue'
import MathAtant from '../canvas/atan'
import Arrow from '../canvas/arrow'
import Ball from '../canvas/ball'
// import boundaryRemove, { init } from '../canvas/boundaryRemove'
// import boundaryRound, { init } from '../canvas/boundaryRound'
// import boundaryLanuch, { init } from '../canvas/boundaryLanuch'
import boundaryBounce, { init } from '../canvas/boundaryBounce'

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
  init()
  boundaryBounce()
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
