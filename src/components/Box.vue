<template>
  <div class="box">{{ props.type }}</div>
</template>

<script setup>
import {computed} from "vue"

const props = defineProps(['type'])
const typeToColorMap = {
  [0]: 'gray',
  [1]: 'red'
}
const color = computed(() => typeToColorMap[props.type])
</script>

<style scoped>
.box {
  width: 25px;
  height: 25px;
  background: v-bind(color);
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>