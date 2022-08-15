<template>
  <div class="grow-box">
    <div v-if="percent !== 100" class="fixed bg-black w-full h-full bg-opacity-25 flex justify-center items-center">
      <div class="rounded-md bg-black bg-opacity-75 text text-white text-lg w-36 h-36 flex justify-center items-center">{{ percent }}%</div>
    </div>
    <div id="stage" class="w-full"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Application, Loader, Container, Sprite, Texture } from 'pixi.js'
import * as PIXI from 'pixi.js'
import { gsap } from 'gsap'
import { PixiPlugin } from 'gsap/PixiPlugin'
import PhyTouch from 'phy-touch'
import {
  page1Img,
  page2Img,
  page3Img,
  page4Img,
  page5Img,
  spriteGroupBgEle,
  page1Ele,
  page2Ele,
  page2ImgChild,
  page3Ele,
  page4Ele,
  spriteGroupLastEle
} from './data.js'
gsap.registerPlugin(PixiPlugin)
PixiPlugin.registerPIXI(PIXI)

let app = null
const percent = ref(0)

const allTimeline = gsap.timeline({ paused: true })
const max = -10800 - 750

onMounted(() => {
  load()
})

function load() {
  // const loader = new Loader()
  // loader.add('spritesheet', 'https://pixijs.io/examples/examples/assets/spritesheet/mc.json').load(onAssetsLoaded)
  const loader = new Loader()
  loader.add(page1Img).add(page2Img).add(page2ImgChild).add(page3Img).add(page4Img).add(page5Img)
  loader.load((loader, resources) => {
    console.log('loader===', loader)
    console.log('resources===', resources)
  })
  loader.onProgress.add(({ progress }) => {
    percent.value = Math.ceil(progress)
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
    transparent: true
  })
  // const box = document.querySelector('.grow-box')
  const box = document.getElementById('stage')
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
  imgArr.push(...spriteGroupLastEle)

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
    change(value) {
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

  // yinfu
  const yinfu = sence.getChildByName('sence2').getChildByName('p2Yinfu')
  const startTimeYinfu = -1150 / max
  const durationYinfu = -50 / max
  const timelineYinfu = gsap.timeline()
  timelineYinfu.to(yinfu, { pixi: { alpha: 0, x: 3109 }, duration: durationYinfu }, startTimeYinfu)

  // door
  const door = sence.getChildByName('sence3').getChildByName('p32')
  const startTimeDoor = -1230 / max
  const durationDoor = -405 / max
  const timelineDoor = gsap.timeline()
  timelineDoor.from(door, { pixi: { scale: 5, x: 0, y: -20 }, duration: durationDoor }, startTimeDoor)

  // work
  const work = sence.getChildByName('sence3').getChildByName('p31')
  const startTimeWork = -1350 / max
  const durationWork = -191 / max
  const timelineWork = gsap.timeline()
  timelineWork.from(work, { pixi: { alpha: 0 }, duration: durationWork }, startTimeWork)

  // 旋涡
  const lastBg = app.stage.getChildByName('spriteGroupLast')
  const startTimeLastBg = -3030 / max
  const durationLastBg = -100 / max
  const timelineLastBg = gsap.timeline()
  timelineLastBg.from(lastBg, { pixi: { alpha: 0 }, duration: durationLastBg }, startTimeLastBg)

  allTimeline.add([sencesTimeline, timelineStar, timelineHouse, timelineSence2, timelineYinfu, timelineDoor, timelineWork, timelineLastBg])
}

function animationPlay(progress) {
  // children walk
  const startTimeWalk = -550 / max
  const durationWalk = -550 / max
  if (progress > startTimeWalk) {
    const total = page2ImgChild.length
    const diff = progress - startTimeWalk
    const p2Child = app.stage.getChildByName('spriteGroupSences').getChildByName('sence2').getChildByName('p2Child')
    const index = Math.floor((diff / durationWalk) * total)
    if (index >= 0 && index < total) {
      p2Child.texture = new Texture.from(page2ImgChild[index])
    }
  }

  // 旋涡
  const startTimeLastBg = -2960 / max
  const durationLastBg = -370 / max

  if (progress > startTimeLastBg) {
    const diff = progress - startTimeLastBg
    const total = page5Img.length
    const index = Math.floor((diff / durationLastBg) * total)
    const last = app.stage.getChildByName('spriteGroupLast').getChildByName('bgLast')
    if (index > 0 && index < total) {
      last.texture = new Texture.from(page5Img[index])
    }
  }
}
</script>

<style lang="scss">
.grow-box {
  canvas {
    max-width: 100%;
  }
}
</style>
