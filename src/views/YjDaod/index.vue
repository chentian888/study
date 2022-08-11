<template>
  <div class="grow-box"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Application, Loader, Container, Sprite } from 'pixi.js'
import AlloyTouch from 'alloytouch'
import { page1Img, page2Img, page3Img, page4Img, spriteGroupBgEle, page1Ele, page2Ele, page3Ele, page4Ele } from './data.js'

const app = new Application({
  width: 750,
  height: 1440
})

onMounted(() => {
  const box = document.querySelector('.grow-box')
  box.appendChild(app.view)
  load()
})

function load() {
  // const loader = new Loader()
  // loader.add('spritesheet', 'https://pixijs.io/examples/examples/assets/spritesheet/mc.json').load(onAssetsLoaded)
  const loader = new Loader()
  loader.add(page1Img).add(page2Img).add(page3Img).add(page4Img)
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
  sence1.position.set(0, 0)
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
  spriteGroupLast.position.set(0, 0)
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

  bindTouchAction()
}

// set the element to the corresponding scene
function addSprToGroup({ img = '', x = '', y = '', sprName = '', sprGroup = '', alpah = '' }) {
  const sprite = new Sprite.from(img)
  sprite.position.set(x, y)
  sprite.name = sprName
  sprite.alpah = alpah

  const containers = sprGroup.split('/')
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
  const min = -10800 - 750
  const alloyTouch = new AlloyTouch({
    touch: '.grow-box', //反馈触摸的dom
    vertical: true, //不必需，默认是true代表监听竖直方向touch
    property: 'translateY', //被运动的属性
    min: min, //不必需,运动属性的最小值
    max: 0, //不必需,滚动属性的最大值
    sensitivity: 0.1, //不必需,触摸区域的灵敏度，默认值为1，可以为负数
    factor: 10, //不必需,表示触摸位移运动位移与被运动属性映射关系，默认值是1
    moveFactor: 10, //不必需,表示touchmove位移与被运动属性映射关系，默认值是1
    bindSelf: false,
    maxSpeed: 2, //不必需，触摸反馈的最大速度限制
    value: 0,
    change: function (value) {
      const progress = value / min
      console.log(value, progress)
    },
    touchStart: function (evt, value) {},
    touchMove: function (evt, value) {},
    touchEnd: function (evt, value) {},
    tap: function (evt, value) {},
    pressMove: function (evt, value) {},
    animationEnd: function (value) {} //运动结束
  })
}
</script>

<style lang="scss">
.grow-box {
  > canvas {
    max-width: 100%;
  }
}
</style>
