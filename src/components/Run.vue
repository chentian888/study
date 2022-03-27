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
  // runInit()
  init2()
})
let stage = null,
  loader = null,
  ground = null,
  grant = null,
  hill = null,
  hill2 = null
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
  // 天空
  const sky = new createjs.Shape()
  const skyImg = loader.getResult('sky')
  sky.graphics.beginBitmapFill(skyImg).drawRect(0, 0, w, h)
  sky.cache(0, 0, w, h)

  //  地面
  ground = new createjs.Shape()
  const groundImg = loader.getResult('ground')
  ground.graphics.beginBitmapFill(groundImg).drawRect(0, 0, w + groundImg.width, h)
  ground.tileW = groundImg.width

  ground.y = h - groundImg.height
  ground.cache(0, 0, w + groundImg.width, groundImg.height)

  // 人物
  const spriteSheet = new createjs.SpriteSheet({
    framerate: 30,
    images: [loader.getResult('grant')],
    frames: { width: 165, height: 292, count: 64, regX: 0, regY: 0 },
    animations: { run: [0, 25, 'run', 1.5], jump: [26, 63, 'run'] }
  })
  grant = new createjs.Sprite(spriteSheet, 'run')
  grant.y = 29

  // 山
  hill = new createjs.Bitmap(loader.getResult('hill'))
  hill2 = new createjs.Bitmap(loader.getResult('hill2'))

  hill.setTransform(Math.random() * w, h - groundImg.height - hill.image.height * 4, 4, 4)
  hill2.setTransform(Math.random() * w, h - groundImg.height - hill2.image.height * 3, 3, 3)

  stage.addChild(sky, hill, hill2, ground, grant)
  //   sprite.gotoAndPlay('run')
  stage.addEventListener('stagemousedown', handleJumpStart)
  createjs.Ticker.timingMode = createjs.Ticker.RAF
  createjs.Ticker.addEventListener('tick', ticker)
}

function handleJumpStart() {
  grant.gotoAndPlay('jump')
}
function ticker(event) {
  if (event.paused) return
  // console.log('===', grant.scaleX)
  var deltaS = event.delta / 1000
  var position = grant.x + 150 * deltaS
  const grantW = grant.getBounds().width + grant.scaleX

  grant.x = position > w + grantW ? -grantW : position
  ground.x = (ground.x - deltaS * 150) % ground.tileW
  hill.x = hill.x - deltaS * 30
  hill2.x = hill2.x - deltaS * 45

  // 边界循环
  if (hill.x + w + hill.image.width * 4 <= 0) {
    hill.x = w
  }
  if (hill2.x + w + hill2.image.width * 3 <= 0) {
    hill2.x = w
  }
  stage.update(event)
}

let stageC, arm, target
function init2() {
  stageC = new createjs.Stage('runStage')
  const container = new createjs.Container()

  target = new createjs.Shape()
  target.graphics.beginFill('red').drawCircle(0, 0, 45).beginFill('white').drawCircle(0, 0, 30).beginFill('red').drawCircle(0, 0, 15)
  target.x = 100
  target.y = 180

  arm = new createjs.Shape()
  arm.graphics.beginFill('#000').drawRect(0, 0, 100, 4).beginFill('blue').drawCircle(100, 0, 9)
  arm.x = 180
  arm.y = 100

  container.addChild(target, arm)

  stageC.addChild(container)

  createjs.Ticker.addEventListener('tick', handleTicker)
  // stageC.update()
}

function handleTicker(event) {
  arm.rotation += 5
  target.alpha = 0.1
  const pt = arm.localToLocal(100, 0, target)
  if (target.hitTest(pt.x, pt.y)) {
    target.alpha = 1
  }
  stageC.update(event)
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