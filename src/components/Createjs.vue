<template>
  <div class="createjs">
    <canvas id="gameView" width="960" height="400"></canvas>
  </div>
</template>

<script setup>
import { defineProps, reactive, onMounted, nextTick } from 'vue'
import grantImg from '../assets/image/art/spritesheet_grant.png'
import skyImg from '../assets/image/art/sky.png'
import groundImg from '../assets/image/art/ground.png'
import hillImg from '../assets/image/art/hill1.png'
import hill2Img from '../assets/image/art/hill2.png'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
onMounted(async () => {
  init()
})

var stage, w, h, loader
var sky, grant, ground, hill, hill2, manifest

function init() {
  // examples.showDistractor()
  stage = new createjs.StageGL('gameView')

  // grab canvas width and height for later calculations:
  w = stage.canvas.width
  h = stage.canvas.height

  manifest = [
    { src: grantImg, id: 'grant' },
    { src: skyImg, id: 'sky' },
    { src: groundImg, id: 'ground' },
    { src: hillImg, id: 'hill' },
    { src: hill2Img, id: 'hill2' }
  ]

  loader = new createjs.LoadQueue(false)
  loader.addEventListener('complete', handleComplete)
  loader.loadManifest(manifest)
}

function handleComplete() {
  // examples.hideDistractor()

  sky = new createjs.Shape()
  sky.graphics.beginBitmapFill(loader.getResult('sky')).drawRect(0, 0, w, h)
  //By default swapping between Stage for StageGL will not allow for vector drawing operation such as BitmapFill, useless you cache your shape.
  sky.cache(0, 0, w, h)

  var groundImg = loader.getResult('ground')
  ground = new createjs.Shape()
  ground.graphics.beginBitmapFill(groundImg).drawRect(0, 0, w + groundImg.width, groundImg.height)
  ground.tileW = groundImg.width
  ground.y = h - groundImg.height
  //By default swapping between Stage for StageGL will not allow for vector drawing operation such as BitmapFill, useless you cache your shape.
  ground.cache(0, 0, w + groundImg.width, groundImg.height)

  hill = new createjs.Bitmap(loader.getResult('hill'))
  hill.setTransform(Math.random() * w, h - hill.image.height * 4 - groundImg.height, 4, 4)
  hill.alpha = 0.5

  hill2 = new createjs.Bitmap(loader.getResult('hill2'))
  hill2.setTransform(Math.random() * w, h - hill2.image.height * 3 - groundImg.height, 3, 3)

  var spriteSheet = new createjs.SpriteSheet({
    framerate: 30,
    images: [loader.getResult('grant')],
    frames: { regX: 82, height: 292, count: 64, regY: 0, width: 165 },
    // define two animations, run (loops, 1.5x speed) and jump (returns to run):
    animations: {
      run: [0, 25, 'run', 1.5],
      jump: [26, 63, 'run']
    }
  })
  grant = new createjs.Sprite(spriteSheet, 'run')
  grant.y = 35

  stage.addChild(sky, hill, hill2, ground, grant)
  stage.addEventListener('stagemousedown', handleJumpStart)

  createjs.Ticker.timingMode = createjs.Ticker.RAF
  createjs.Ticker.addEventListener('tick', tick)
}

function handleJumpStart() {
  grant.gotoAndPlay('jump')
}

function tick(event) {
  var deltaS = event.delta / 1000
  var position = grant.x + 150 * deltaS

  var grantW = grant.getBounds().width * grant.scaleX
  grant.x = position >= w + grantW ? -grantW : position

  ground.x = (ground.x - deltaS * 150) % ground.tileW
  hill.x = hill.x - deltaS * 30
  if (hill.x + hill.image.width * hill.scaleX <= 0) {
    hill.x = w
  }
  hill2.x = hill2.x - deltaS * 45
  if (hill2.x + hill2.image.width * hill2.scaleX <= 0) {
    hill2.x = w
  }

  stage.update(event)
}
</script>

<style scoped>
.createjs {
  text-align: center;
}
#gameView {
  /* background-color: #42b983; */
  margin: 0 auto;
}
</style>
