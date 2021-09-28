<template>
  <div class="MidAutumnGame_ISvAk3Jf">
    <div class="game-on">
      <img class="moon-lay" src="../assets/image/i_moon-small.05518c1.png" />
      <div class="music"><div></div></div>
      <div class="clock pointer-none">
        <div title="" role="button" aria-label="animation" tabindex="0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 158" width="440" height="158" preserveAspectRatio="xMidYMid slice">
            <defs>
              <clipPath id="__lottie_element_235">
                <rect width="440" height="158" x="0" y="0"></rect>
              </clipPath>
              <image xlink:href="../assets/image/dot1.png"></image>
              <image xlink:href="../assets/image/dot2.png"></image>
              <image xlink:href="../assets/image/ellipse.png"></image>
            </defs>
            <g clip-path="url(#__lottie_element_235)">
              <g class="png">
                <image width="424px" height="124px" preserveAspectRatio="xMidYMid slice" xlink:href="../assets/image/ellipse2.png"></image>
              </g>
              <g>
                <g>
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="4"
                    stroke="rgb(114,240,255)"
                    stroke-opacity="1"
                    stroke-width="2"
                    d=" M-8.161999702453613,-61 C69.45800018310547,-61 150,-61 150,-61 C183.6658935546875,-61 211,-33.66590118408203 211,0 C211,0 211,0 211,0 C211,0 211,0 211,0 C211,33.66590118408203 183.6658935546875,61 150,61 C150,61 -150,61 -150,61 C-183.6658935546875,61 -211,33.66590118408203 -211,0 C-211,0 -211,0 -211,0 C-211,-33.66590118408203 -183.6658935546875,-61 -150,-61 C-150,-61 -80.34500122070312,-61 -8.161999702453613,-61"
                  ></path>
                </g>
              </g>
              <g class="png">
                <image width="14px" height="14px" preserveAspectRatio="xMidYMid slice" xlink:href="../assets/image/dot3.png"></image>
              </g>
              <g class="png">
                <image width="14px" height="14px" preserveAspectRatio="xMidYMid slice" xlink:href="../assets/image/dot4.png"></image>
              </g>
            </g>
          </svg>
        </div>
        <div class="inset">00.00</div>
      </div>
      <div class="score">
        <img src="../assets/image/start.png" /><span id="startCount">{{ counter }}</span>
      </div>
      <div class="game-container">
        <div class="stars pointer-none">
          <div title="" role="button" aria-label="animation" tabindex="0" style="width: 100%; height: 100%">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 374 458" width="374" height="458" preserveAspectRatio="xMidYMid slice">
              <defs>
                <clipPath id="__lottie_element_16">
                  <rect width="374" height="458" x="0" y="0"></rect>
                </clipPath>
                <image xlink:href="../assets/image/start2.png"></image>
              </defs>
              <g clip-path="url(#__lottie_element_16)">
                <g class="png" id="star">
                  <image width="185px" height="179px" preserveAspectRatio="xMidYMid slice" xlink:href="../assets/image/start3.png"></image>
                </g>
                <g class="png" style="display: none">
                  <image width="185px" height="179px" preserveAspectRatio="xMidYMid slice" xlink:href="../assets/image/start4.png"></image>
                </g>
                <g class="png" style="display: none">
                  <image width="185px" height="179px" preserveAspectRatio="xMidYMid slice" xlink:href="../assets/image/start5.png"></image>
                </g>
                <g class="png" style="display: none">
                  <image width="185px" height="179px" preserveAspectRatio="xMidYMid slice" xlink:href="../assets/image/start6.png"></image>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class="moon">
          <img id="moon" src="../assets/image/i_moon.8ad1636.png" />
        </div>
        <div class="sfer pointer-none">
          <div title="" role="button" aria-label="animation" tabindex="0" style="width: 100%; height: 100%">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475 588" width="475" height="588" preserveAspectRatio="xMidYMid slice">
              <defs>
                <clipPath id="__lottie_element_30">
                  <rect width="475" height="588" x="0" y="0"></rect>
                </clipPath>
                <image xlink:href="../assets/image/leg_r_bottom.png"></image>
                <image xlink:href="../assets/image/leg_r_top.png"></image>
                <image xlink:href="../assets/image/leg_r_foot.png"></image>
                <image xlink:href="../assets/image/leg_r_knee.png"></image>
                <image xlink:href="../assets/image/leg_l_bottom.png"></image>
                <image xlink:href="../assets/image/leg_l_top.png"></image>
                <image xlink:href="../assets/image/leg_l_foot.png"></image>
                <image xlink:href="../assets/image/leg_l_knee.png"></image>
                <image xlink:href="../assets/image/body_pack.png"></image>
                <image xlink:href="../assets/image/body_head.png"></image>
                <image xlink:href="../assets/image/body_straps.png"></image>
                <image xlink:href="../assets/image/body_box.png"></image>
                <image xlink:href="../assets/image/arm_l.png"></image>
              </defs>
              <g clip-path="url(#__lottie_element_30)" id="sfer">
                <g id="leg_r">
                  <g class="png" id="leg_r_bottom">
                    <image
                      width="117px"
                      height="58px"
                      preserveAspectRatio="xMidYMid slice"
                      xlink:href="../assets/image/leg_r_bottom.png"
                    ></image>
                  </g>
                  <g class="png" id="leg_r_top">
                    <image
                      width="78px"
                      height="94px"
                      preserveAspectRatio="xMidYMid slice"
                      xlink:href="../assets/image/leg_r_top.png"
                    ></image>
                  </g>
                  <g class="png" id="foot_r">
                    <image
                      width="43px"
                      height="75px"
                      preserveAspectRatio="xMidYMid slice"
                      xlink:href="../assets/image/leg_r_foot.png"
                    ></image>
                  </g>
                  <g class="png" id="knee_r">
                    <image
                      width="53px"
                      height="59px"
                      preserveAspectRatio="xMidYMid slice"
                      xlink:href="../assets/image/leg_r_knee.png"
                    ></image>
                  </g>
                </g>

                <g id="leg_l">
                  <g class="png" id="leg_l_bottom">
                    <image
                      width="79px"
                      height="121px"
                      preserveAspectRatio="xMidYMid slice"
                      xlink:href="../assets/image/leg_l_bottom.png"
                    ></image>
                  </g>
                  <g class="png" id="leg_l_top">
                    <image
                      width="140px"
                      height="94px"
                      preserveAspectRatio="xMidYMid slice"
                      xlink:href="../assets/image/leg_l_top.png"
                    ></image>
                  </g>
                  <g class="png" id="foot_l">
                    <image
                      width="84px"
                      height="37px"
                      preserveAspectRatio="xMidYMid slice"
                      xlink:href="../assets/image/leg_l_foot.png"
                    ></image>
                  </g>
                  <g class="png" id="knee_l">
                    <image
                      width="67px"
                      height="45px"
                      preserveAspectRatio="xMidYMid slice"
                      xlink:href="../assets/image/leg_l_knee.png"
                    ></image>
                  </g>
                </g>

                <g class="png" id="pack">
                  <image
                    width="193px"
                    height="160px"
                    preserveAspectRatio="xMidYMid slice"
                    xlink:href="../assets/image/body_pack.png"
                  ></image>
                </g>
                <g class="png" id="head">
                  <image
                    width="199px"
                    height="185px"
                    preserveAspectRatio="xMidYMid slice"
                    xlink:href="../assets/image/body_head.png"
                  ></image>
                </g>
                <g class="png" id="straps">
                  <image
                    width="147px"
                    height="136px"
                    preserveAspectRatio="xMidYMid slice"
                    xlink:href="../assets/image/body_straps.png"
                  ></image>
                </g>
                <g class="png" id="box">
                  <image
                    width="192px"
                    height="161px"
                    preserveAspectRatio="xMidYMid slice"
                    xlink:href="../assets/image/body_box.png"
                  ></image>
                </g>
                <g class="png" id="arm_l">
                  <image width="170px" height="166px" preserveAspectRatio="xMidYMid slice" xlink:href="../assets/image/arm_l.png"></image>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class="rabbit pointer-none">
          <div title="" role="button" aria-label="animation" tabindex="0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 233 201" width="233" height="201" preserveAspectRatio="xMidYMid slice">
              <defs>
                <clipPath id="__lottie_element_71">
                  <rect width="233" height="201" x="0" y="0"></rect>
                </clipPath>
                <image xlink:href="../assets/image/sf_pet13.png"></image>
                <image xlink:href="../assets/image/sf_pet13.png"></image>
                <image xlink:href="../assets/image/sf_pet12.png"></image>
                <image xlink:href="../assets/image/sf_pet11.png"></image>
                <image xlink:href="../assets/image/sf_pet10.png"></image>
                <image xlink:href="../assets/image/sf_pet9.png"></image>
                <image xlink:href="../assets/image/sf_pet8.png"></image>
                <image xlink:href="../assets/image/sf_pet7.png"></image>
                <image xlink:href="../assets/image/sf_pet6.png"></image>
                <image xlink:href="../assets/image/sf_pet5.png"></image>
                <image xlink:href="../assets/image/sf_pet4.png"></image>
                <image xlink:href="../assets/image/sf_pet3.png"></image>
                <image xlink:href="../assets/image/sf_pet2.png"></image>
                <image xlink:href="../assets/image/sf_pet1.png"></image>
              </defs>
              <g clip-path="url(#__lottie_element_71)">
                <g class="png pet1">
                  <image width="179px" height="187px" preserveAspectRatio="xMidYMid slice" xlink:href="../assets/image/sf_pet7.png"></image>
                </g>
                <g class="png pet2">
                  <image width="182px" height="191px" preserveAspectRatio="xMidYMid slice" xlink:href="../assets/image/sf_pet6.png"></image>
                </g>
                <g class="png pet3">
                  <image width="194px" height="202px" preserveAspectRatio="xMidYMid slice" xlink:href="../assets/image/sf_pet5.png"></image>
                </g>
                <g class="png pet4">
                  <image width="194px" height="201px" preserveAspectRatio="xMidYMid slice" xlink:href="../assets/image/sf_pet4.png"></image>
                </g>
                <g class="png pet5">
                  <image width="165px" height="181px" preserveAspectRatio="xMidYMid slice" xlink:href="../assets/image/sf_pet3.png"></image>
                </g>
                <g class="png pet6">
                  <image width="170px" height="183px" preserveAspectRatio="xMidYMid slice" xlink:href="../assets/image/sf_pet2.png"></image>
                </g>
                <g class="png pet7">
                  <image width="169px" height="176px" preserveAspectRatio="xMidYMid slice" xlink:href="../assets/image/sf_pet1.png"></image>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class="speed-btn showBg" @click="click2">
          <div class="speed-btn_mask"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
const tlArmLeft = gsap.timeline()
const animationTime = 0.4
const tlSfer = gsap.timeline({ repeat: -1 })
const tlLegLeft = gsap.timeline({ repeat: -1 })
const tlLegRight = gsap.timeline({ repeat: -1 })
const tlMoon = gsap.timeline()
const tlPet = gsap.timeline({ repeat: -1 })
onMounted(() => {
  // 位置初始化
  tlArmLeft
    .set('#head', { x: 127.5, y: 76.4 })
    .set('#box', { x: 33.8, y: 194.1 })
    .set('#pack', { x: 149, y: 194 })
    .set('#straps', { x: 165.5, y: 228.4 })
    .set('#arm_l', { x: 153.8, y: 225.9 })
    .set('#knee_l', { x: 167.2, y: 384.8 })
    .set('#foot_l', { x: 150, y: 451.5, rotation: 25 })
    .set('#leg_l_top', { x: 154.8, y: 344.1, rotation: -15 })
    .set('#leg_l_bottom', { x: 165, y: 375.5 })
    .set('#leg_r_top', { x: 212.4, y: 342.3 })
    .set('#leg_r_bottom', { x: 254.7, y: 399.4 })
    .set('#knee_r', {
      transformOrigin: '80% 0',
      x: 235.6,
      y: 390,
      rotation: -10
    })
    .set('#foot_r', { x: 351.8, y: 395.3, rotation: -10 })
    .set('#star', { x: -99.3, y: 189.8 })

  tlSfer
    .set('#sfer', { y: 0 })
    .to('#sfer', { duration: animationTime / 2, y: -20 })
    .to('#sfer', { duration: animationTime / 2, y: 0 })
  tlSfer.pause()

  // 左腿
  tlLegLeft
    .set('#leg_l', { transformOrigin: '60% 20%', rotation: 20 })
    .to('#leg_l', { duration: animationTime / 4, rotation: 0 })
    .to('#leg_l', { duration: animationTime / 4, rotation: -60 })
    .to('#leg_l', { duration: animationTime / 2, rotation: 20 })

  tlLegLeft.pause()

  // 右腿
  tlLegRight
    .set('#leg_r', { transformOrigin: '15% 15%', rotation: 0 })
    .to('#leg_r', { duration: animationTime / 4, rotation: 20 })
    .to('#leg_r', { duration: animationTime / 4, rotation: 100 })
    .to('#leg_r', { duration: animationTime / 2, rotation: 0 })

  tlLegRight.pause()

  // 星球
  tlMoon
  tlMoon.set('#moon', { transformOrigin: '50% 50%', rotation: 0 }).to('#moon', { duration: animationTime * 300, rotation: 360 * 150 })
  // .to("#moon", animationTime / 4, { rotation: 180 })
  // .to("#moon", animationTime / 4, { rotation: 270 })
  // .to("#moon", animationTime / 4, { rotation: 360 })
  tlMoon.pause()

  // 宠物
  tlPet.set(['.pet1', '.pet2', '.pet3', '.pet4', '.pet5', '.pet6', '.pet7'], { display: 'none' })
  //   tlPet
  //     .to('.pet1', animationTime / 7, { display: 'block' })
  //     .set('.pet1', { display: 'none' })

  //     .to('.pet2', animationTime / 7, { display: 'block' })
  //     .set('.pet2', { display: 'none' })

  //     .to('.pet3', animationTime / 7, { display: 'block' })
  //     .set('.pet3', { display: 'none' })

  //     .to('.pet4', animationTime / 7, { display: 'block' })
  //     .set('.pet4', { display: 'none' })

  //     .to('.pet5', animationTime / 7, { display: 'block' })
  //     .set('.pet5', { display: 'none' })

  //     .to('.pet6', animationTime / 7, { display: 'block' })
  //     .set('.pet6', { display: 'none' })

  //     .to('.pet7', animationTime / 7, { display: 'block' })
  //     .set('.pet7', { display: 'none' })

  tlPet.pause()
})

let i = 0.6
let count = ref(0)
let isEnd = false
let isStart = false
let now = Date.now()

function countDown() {
  isStart = true
  let total = 10
  return new Promise((resolve) => {
    let timer = setInterval(() => {
      total -= 1
      if (total <= 0) {
        clearInterval(timer)
        isEnd = true
        resolve()
      }
    }, 1000)
  })
}

function rotate() {
  !isStart && countDown()
  if (isEnd) {
    console.log('===', '已经结束')
    tlSfer.pause()
    tlLegLeft.pause()
    tlLegRight.pause()
    tlMoon.pause()
    return
  }
  count.value += 1
  console.log(`统计第${count.value}次点击`, `用时${Date.now() - now}ms`)
  if (!tlMoon.isActive()) {
    tlSfer.play()
    tlLegLeft.play()
    tlLegRight.play()
    tlMoon.play()
  }
  tlMoon.timeScale(i)
  tlSfer.timeScale(i / 10)
  tlLegLeft.timeScale(i / 10)
  tlLegRight.timeScale(i / 10)
  tlMoon.timeScale(i / 10)
  
  i += 0.2
  now = Date.now()
}
</script>
<script>
export default {
  setup() {},
  data() {
    return {
      counter: 0,
      start: 0,
      end: 10000,
      duration: 3,
      format: true
    }
  },
  methods: {
    click2() {
      gsap.set(this, {
        log: this.start
      })
      gsap.to(this, this.duration, {
        ease: Power2.easeInOut,
        log: this.end,
        onUpdate: () => {
          this.counter = Math.floor(this.log)
        }
      })
    }
  }
}
</script>

<style scope>
@import url('../assets/style/style.css');
* {
  box-sizing: border-box;
}
svg {
  width: 100%;
  height: 100%;
}
</style>
