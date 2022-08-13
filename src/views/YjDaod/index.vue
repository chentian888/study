<template>
  <div class="grow-box"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Application, Loader, Container, Sprite, Texture } from 'pixi.js'
import * as PIXI from 'pixi.js'
import { gsap } from 'gsap'
import { PixiPlugin } from 'gsap/PixiPlugin'
import PhyTouch from 'phy-touch'
import { page1Img, page2Img, page3Img, page4Img, spriteGroupBgEle, page1Ele, page2Ele, page2ImgChild, page3Ele, page4Ele } from './data.js'
gsap.registerPlugin(PixiPlugin)
PixiPlugin.registerPIXI(PIXI)

let app = null

const allTimeline = gsap.timeline({ paused: true })
const max = -10800 - 750

onMounted(() => {
  load()
})

function load() {
  // const loader = new Loader()
  // loader.add('spritesheet', 'https://pixijs.io/examples/examples/assets/spritesheet/mc.json').load(onAssetsLoaded)
  const loader = new Loader()
  loader.add(page1Img).add(page2Img).add(page2ImgChild).add(page3Img).add(page4Img)
  loader.load((loader, resources) => {
    console.log('loader===', loader)
    console.log('resources===', resources)
  })
  loader.onProgress.add(({ progress }) => {
    console.log('progress', progress)
  })
  loader.onComplete.add(() => {
    onAssetsLoaded()
  })
}

// init container and set touch event
function onAssetsLoaded() {
  app = new Application({
    width: 750,
    height: 1440,
    resolution: window.devicePixelRatio || 1
  })
  const box = document.querySelector('.grow-box')
  box.appendChild(app.view)

  // bg container
  const spriteGroupBg = new Container()
  spriteGroupBg.name = 'spriteGroupBg'
  spriteGroupBg.position.set(0, 0)
  app.stage.addChild(spriteGroupBg)

  // sence container
  const spriteGroupSences = new Container()
  spriteGroupSences.name = 'spriteGroupSences'
  spriteGroupSences.position.set(0, 0)
  app.stage.addChild(spriteGroupSences)
  // sence1
  const sence1 = new Container()
  sence1.pivot.set(1784, 621)
  sence1.position.set(1784, 621)
  sence1.name = 'sence1'

  // sence2
  const sence2 = new Container()
  sence2.position.set(1773, 0)
  sence2.name = 'sence2'

  // sence3
  const sence3 = new Container()
  sence3.position.set(4960, 0)
  sence3.name = 'sence3'

  // sence4
  const sence4 = new Container()
  sence4.position.set(7902, 0)
  sence4.name = 'sence4'

  spriteGroupSences.addChild(sence1)
  spriteGroupSences.addChild(sence2)
  spriteGroupSences.addChild(sence3)
  spriteGroupSences.addChild(sence4)

  // last page container
  const spriteGroupLast = new Container()
  spriteGroupLast.name = 'spriteGroupLast'
  spriteGroupLast.position.set(-203, 0)
  app.stage.addChild(spriteGroupLast)

  const imgArr = []
  imgArr.push(...spriteGroupBgEle)
  imgArr.push(...page1Ele)
  imgArr.push(...page2Ele)
  imgArr.push(...page3Ele)
  imgArr.push(...page4Ele)

  imgArr.forEach((ele) => {
    addSprToGroup(ele)
  })

  //各种滑动和动画
  tweenAction()

  bindTouchAction()
}

// set the element to the corresponding scene
function addSprToGroup(item) {
  const sprite = new Sprite.from(item.img)
  sprite.position.set(item.x, item.y)
  sprite.name = item.sprName
  sprite.alpha = item.alpha
  if (item.pivotX && item.pivotY) {
    sprite.pivot.set(item.pivotX, item.pivotY)
    sprite.position.set(item.x + item.pivotX, item.y + item.pivotY)
  } else {
    sprite.position.set(item.x, item.y)
  }

  const containers = item.sprGroup.split('/')
  let parent = app.stage.getChildByName(containers[0])

  const len = containers.length
  if (len > 1) {
    for (let i = 1; i < len; i++) {
      parent = parent.getChildByName(containers[i])
    }
  }

  parent.addChild(sprite)
}

// bind touch action
function bindTouchAction() {
  const sence = app.stage.getChildByName('spriteGroupSences')
  const alloyTouch = new PhyTouch({
    touch: 'body', // 反馈触摸的dom
    vertical: true, // 不必需，默认是true代表监听竖直方向touch
    target: { x: 0 }, // 运动的对象
    property: 'x', // 被运动的属性
    sensitivity: 0.2,
    min: -3400, // 不必需,运动属性的最小值
    max: 0, // 不必需,滚动属性的最大值
    // moveFactor: 3,
    bindSelf: false,
    maxSpeed: 0.8, // 不必需，触摸反馈的最大速度限制
    value: 0,
    change: function (value) {
      const progress = value / max
      console.log(value, progress)
      allTimeline.seek(progress)
      animationPlay(progress)
    }
  })
}

function tweenAction() {
  const sence = app.stage.getChildByName('spriteGroupSences')
  const sencesTimeline = gsap.timeline()
  const sencesTween = gsap.to(sence, { x: max })
  sencesTimeline.add(sencesTween)

  // 星星
  const star = sence.getChildByName('sence1').getChildByName('p1Star')
  const startTime = -20 / max
  const duration = -10 / max
  const timelineStar = gsap.timeline()
  timelineStar.from(star, { pixi: { alpha: 0 }, duration }, startTime)

  // house
  const house = sence.getChildByName('sence1')
  const startTimeHouse = -340 / max
  const durationHouse = -50 / max
  const timelineHouse = gsap.timeline()
  timelineHouse.to(house, { pixi: { scale: 3 }, duration: durationHouse }, startTimeHouse)
  timelineHouse.to(house, { pixi: { alpha: 0 }, duration: durationHouse }, startTimeHouse)

  // sence2
  const mother = sence.getChildByName('sence2')
  const startTimeSence2 = -360 / max
  const durationSence2 = -40 / max
  const timelineSence2 = gsap.timeline()
  timelineSence2.from(mother, { pixi: { alpha: 0 }, duration: durationSence2 }, startTimeSence2)

  // 走路

  // 音符飘动

  // 窗户

  // 工作

  // 旋涡

  allTimeline.add([sencesTimeline, timelineStar, timelineHouse, timelineSence2])
}

function animationPlay(progress) {
  // children walk
  const startTimeWalk = -550 / max
  const durationWalk = -550 / max
  // console.log('total=====', startTimeWalk, progress)
  if (progress > startTimeWalk) {
    const total = page2ImgChild.length
    const diff = progress - startTimeWalk
    const p2Child = app.stage.getChildByName('spriteGroupSences').getChildByName('sence2').getChildByName('p2Child')
    const index = Math.floor((diff / durationWalk) * total)
    console.log('total=====', diff / durationWalk)
    if (index >= 0 && index < total) {
      console.log('index=====', index)
      p2Child.texture = new Texture.from(page2ImgChild[index])
    }
  }
}
</script>

<style lang="scss">
.grow-box {
  > canvas {
    max-width: 100%;
  }
}
</style>
