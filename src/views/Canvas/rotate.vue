<template>
  <canvas class="stageStyle" id="stage"></canvas>
</template>

<script setup>
import { nextTick, onMounted } from 'vue'
import C from '../../canvas/utils'
import Arrow from '../../canvas/arrow2'
onMounted(async () => {
  await nextTick()
  const canvas = document.getElementById('stage')
  const ctx = canvas.getContext('2d')
  const W = (canvas.width = 800)
  const H = (canvas.height = 600)
  let rotateSpeed = 1
  const arrow = new Arrow({ x: W / 2, y: H / 2, fillStyle: C.color() }).drawArrow(ctx).render(ctx)

  // function autoRotate() {
  //   window.requestAnimationFrame(() => {
  //     autoRotate()
  //   })
  //   rotateSpeed += 3
  //   let radian = rotateSpeed * (Math.PI / 180)
  //   radian %= Math.PI * 2
  //   arrow.rotation = radian
  //   ctx.clearRect(0, 0, W, H)
  //   arrow.render(ctx)
  // }
  // autoRotate()

  canvas.addEventListener('mousemove', (ev) => {
    const { x: courseX, y: courseY } = C.eventWrapper(ev)
    const dx = courseX - arrow.x
    const dy = courseY - arrow.y
    arrow.rotation = Math.atan2(dy, dx)
    ctx.clearRect(0, 0, W, H)
    arrow.render(ctx)
  })
})
</script>

<style scoped>
.stageStyle {
  border: 1px solid #f00;
}
</style>
