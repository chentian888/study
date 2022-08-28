<template>
  <canvas class="stageStyle" id="stage"></canvas>
</template>

<script setup>
import { nextTick, onMounted } from 'vue'
import C from '../../canvas/utils'
import Ball from '../../canvas/ball'
onMounted(async () => {
  await nextTick()
  const canvas = document.getElementById('stage')
  const ctx = canvas.getContext('2d')
  const W = (canvas.width = 800)
  const H = (canvas.height = 600)

  const ball = new Ball({ x: 50, y: 50, fillStyle: C.color() }).render(ctx)

  // 向量
  function vector() {
    window.requestAnimationFrame(() => {
      vector()
    })

    // 速度
    const v = 2

    // 方向
    const angle = 45
    const radian = C.toRad(30)

    ctx.clearRect(0, 0, W, H)
    ball.x += v * Math.cos(radian)
    ball.y += v * Math.sin(radian)
    ball.render(ctx)
  }
  vector()
})
</script>

<style scoped>
.stageStyle {
  border: 1px solid #f00;
}
</style>
