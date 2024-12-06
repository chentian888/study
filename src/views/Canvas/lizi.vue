<template>
  <div class="stage">
    <canvas id="stage"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
let width: number = 0
let height: number = 0
let ctx: CanvasRenderingContext2D | null
const list: ReturnType<typeof dot>[] = []
let canvas: HTMLCanvasElement
onMounted(() => {
  init()
})

function dot(index: number, x: number, y: number) {
  // const alpha = (Math.random() * 10 + 1) / 10 / 2
  const alpha = 1
  return {
    index,
    x,
    y,
    r: Math.random() * 2 + 1,
    color: `rgba(255, 255, 255, ${alpha})`
  }
}

function draw(ele: ReturnType<typeof dot>) {
  if (ctx) {
    ctx.fillStyle = ele.color
    ctx.shadowBlur = ele.r * 2
    ctx.beginPath()
    ctx.arc(ele.x, ele.y, ele.r, 0, 2 * Math.PI, false)
    ctx.closePath()
    ctx.fill()
  }
}

function init() {
  width = document.documentElement.offsetWidth
  height = document.documentElement.offsetHeight
  canvas = document.getElementById('stage') as HTMLCanvasElement
  ctx = canvas.getContext('2d')

  canvas.width = width
  canvas.height = height
  if (ctx) {
    ctx.fillStyle = '#f00'
    ctx.fillRect(0, 0, width, height)
    ctx.fill()
  }

  for (var i = 0; i < 80; i++) {
    list[i] = dot(i, Math.random() * width, Math.random() * height)
    draw(list[i])
  }
  animate()
}

function move(ele: ReturnType<typeof dot>) {
  ele.y -= 0.15
  if (ele.y <= -10) {
    ele.y = height + 10
  }
  draw(ele)
}

function animate() {
  ctx!.clearRect(0, 0, width, height)
  ctx!.fillStyle = '#f00'
  ctx!.fillRect(0, 0, width, height)
  ctx!.fill()
  for (let index = 0; index < list.length; index++) {
    const ele = list[index]
    move(ele)
  }

  window.requestAnimationFrame(animate)
}
</script>

<style scoped>
.stage {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
