<template>
  <canvas class="stageStyle" id="stage"></canvas>
</template>

<script setup>
import { nextTick, onMounted } from 'vue'
onMounted(async () => {
  await nextTick()
})
</script>

<style scoped>
.stageStyle {
  border: 1px solid #f00;
}
</style>
