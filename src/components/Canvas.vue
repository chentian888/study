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

  const ball = new Ball()
  ball.render()
  // ball.moveBetweenLeftAndRight()
  // ball.moveUpAndDown()
  ball.scaleXY()
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