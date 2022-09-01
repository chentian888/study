<template>
  <canvas class="stageStyle" id="stage"></canvas>
</template>
<script setup>
import { nextTick, onMounted } from 'vue'
import C from '../../../canvas/utils'
import Ball from '../../../canvas/ball2'
onMounted(async () => {
  await nextTick()
  const canvas = document.getElementById('stage')
  const ctx = canvas.getContext('2d')
  const W = (canvas.width = 800)
  const H = (canvas.height = 600)

  let speed = C.random([30, 50]),
    angle = C.toRad(30)

  //   let frictional = 1 // 摩擦系数
  let frictional = 0.92 // 摩擦系数
  const ball = new Ball({ x: 50, y: 50, fillStyle: C.color(), r: 40 }).render(ctx)
  function move() {
    window.requestAnimationFrame(() => {
      move()
    })
    ctx.clearRect(0, 0, W, H)
    // 摩擦方法1
    // speed = speed > frictional ? speed - frictional : 0

    // 摩擦方法2
    speed = speed * frictional
    // console.log(speed)
    if (Math.abs(speed) >= 0.0001) {
      let vx = speed * Math.cos(angle)
      let vy = speed * Math.sin(angle)
      ball.x += vx
      ball.y += vy
    }
    ball.render(ctx)
  }
  move()
})
</script>
<style scoped>
.stageStyle {
  border: 1px solid #f00;
}
</style>
