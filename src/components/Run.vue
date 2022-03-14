<template>
  <div class="run-box">
    <canvas id="runStage" width="920" height="400"></canvas>
  </div>
</template>
<script setup>
import { nextTick, onMounted } from 'vue'
import grantImg from '../assets/image/art/spritesheet_grant.png'
import skyImg from '../assets/image/art/sky.png'
import groundImg from '../assets/image/art/ground.png'
import hillImg from '../assets/image/art/hill1.png'
import hill2Img from '../assets/image/art/hill2.png'

onMounted(async () => {
  await nextTick()
  runInit()
})
let stage = null,
  loader = null,
  sprite = null
let w = 0,
  h = 0
function runInit() {
  //   const canvas = document.getElementById('run-stage')
  stage = new createjs.StageGL('runStage')
  w = stage.canvas.width
  h = stage.canvas.height
  console.log(w, h)
  const manifest = [
    { src: grantImg, id: 'grant' },
    { src: skyImg, id: 'sky' },
    { src: groundImg, id: 'ground' },
    { src: hillImg, id: 'hill' },
    { src: hill2Img, id: 'hill2' }
  ]

  loader = new createjs.LoadQueue(false)
  loader.addEventListener('complete', handleComplete)
  loader.loadManifest(manifest)

  //   stage.update()
}

function handleComplete() {
  const sky = new createjs.Shape()
  const skyImg = loader.getResult('sky')
  sky.graphics.beginBitmapFill(skyImg).drawRect(0, 0, w, h)
  sky.cache(0, 0, w, h)

  const ground = new createjs.Shape()
  const groundImg = loader.getResult('ground')
  ground.graphics.beginBitmapFill(groundImg).drawRect(0, 0, w, h)
  ground.y = h - groundImg.height
  ground.cache(0, 0, w, h)

  //SpriteSheet
  const spriteSheet = new createjs.SpriteSheet({
    images: [loader.getResult('grant')],
    frames: { width: 165, height: 292, count: 64, regX: 0, regY: 0 },
    animations: { run: [0, 25], jump: [26, 63, 'run'] }
  })
  sprite = new createjs.Sprite(spriteSheet, 'run')

  stage.addChild(sky, ground, sprite)
//   sprite.gotoAndPlay('run')
  stage.addEventListener('stagemousedown', handleJumpStart)
  createjs.Ticker.timingMode = createjs.Ticker.RAF
  createjs.Ticker.addEventListener('tick', ticker)
}

function handleJumpStart() {
  console.log('===')
  sprite.gotoAndPlay('jump')
}
function ticker() {
  stage.update()
}
</script>
<style scoped>
.run-box {
  text-align: center;
}
#run-stage {
  background: #eee;
}
</style>