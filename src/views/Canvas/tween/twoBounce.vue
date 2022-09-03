<template>
  <canvas class="stageStyle" id="stage"></canvas>
</template>

<script setup>
import { nextTick, onMounted } from 'vue'
onMounted(async () => {
  await nextTick()
  //   1.绘制2个小球
  // 2.绘制2个小球之间的连线
})
</script>

<style scoped>
.stageStyle {
  border: 1px solid #f00;
}
</style>
