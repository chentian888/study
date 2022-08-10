<template>
  <div class="grow-box"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Application, Loader } from 'pixi.js'
import { page1Img } from './data.js'
console.log()
const stage = new Application({
  width: 750,
  height: 1440
})

onMounted(() => {
  const box = document.querySelector('.grow-box')
  box.appendChild(stage.view)
  load()
})

function load() {
  // const loader = new Loader()
  // loader.add('spritesheet', 'https://pixijs.io/examples/examples/assets/spritesheet/mc.json').load(onAssetsLoaded)
  const loader = new Loader()
  loader.add(page1Img)
  loader.load((loader, resources) => {
    console.log('loader===', loader)
    console.log('resources===', resources)
  })
  loader.onProgress.add(({ progress }) => {
    console.log('progress', progress)
  })
}

function onAssetsLoaded() {
  console.log('232323')
}
</script>

<style lang="scss">
.grow-box {
  > canvas {
    max-width: 100%;
  }
}
</style>
