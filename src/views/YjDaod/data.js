// sence1
export const page1Img = [
  'src/assets/img/yjdaod/bg.jpg',
  'src/assets/img/yjdaod/ewm.png',
  'src/assets/img/yjdaod/logo.png',
  'src/assets/img/yjdaod/musicoff.png',
  'src/assets/img/yjdaod/musicon.png',
  'src/assets/img/yjdaod/p1-bg.png', // 6
  'src/assets/img/yjdaod/p1-cloud1.png',
  'src/assets/img/yjdaod/p1-cloud2.png',
  'src/assets/img/yjdaod/p1-grass1.png',
  'src/assets/img/yjdaod/p1-grass2.png', // 10
  'src/assets/img/yjdaod/p1-house.png',
  'src/assets/img/yjdaod/p1-p1.png',
  'src/assets/img/yjdaod/p1-star.png',
  'src/assets/img/yjdaod/p1-tree.png'
]

// sence2
export const page2Img = [
  'src/assets/img/yjdaod/p2-1.png',
  'src/assets/img/yjdaod/p2-boy.png',
  'src/assets/img/yjdaod/p2-huati.png',
  'src/assets/img/yjdaod/p2-lotsofyinfu.png',
  'src/assets/img/yjdaod/p2-mother.png',
  'src/assets/img/yjdaod/p2-school.png', // 5
  'src/assets/img/yjdaod/p2-shitou.png',
  'src/assets/img/yjdaod/p2-tree4.png',
  'src/assets/img/yjdaod/p2-wutai.png',
  'src/assets/img/yjdaod/p2-yinfu.png'
]

export const page2ImgChild = []
for (let i = 1; i <= 34; i++) {
  page2ImgChild.push(`src/assets/img/yjdaod/w${i}.png`)
}

// sence3
export const page3Img = [
  'src/assets/img/yjdaod/p3-1.png',
  'src/assets/img/yjdaod/p3-2.png',
  'src/assets/img/yjdaod/p3-3.png',
  'src/assets/img/yjdaod/p3-childbirth.png'
]

// sence4
export const page4Img = [
  'src/assets/img/yjdaod/p4-1.png',
  'src/assets/img/yjdaod/p4-bg.png',
  'src/assets/img/yjdaod/p4-house3.png',
  'src/assets/img/yjdaod/p4-start.png'
]
for (let i = 1; i <= 52; i++) {
  page4Img.push(`src/assets/img/yjdaod/x${i}.png`)
}

export const spriteGroupBgEle = [{ img: page1Img[0], x: 0, y: 0, alpha: 1, sprName: 'bgSpr', sprGroup: 'spriteGroupBg' }]

export const page1Ele = [
  { img: page1Img[5], x: 0, y: 0, sprName: 'p1Bg', sprGroup: 'spriteGroupSences/sence1', alpha: 1 },
  { img: page1Img[6], x: -20, y: 177, sprName: 'p1Cloud1', sprGroup: 'spriteGroupSences/sence1', alpha: 1 },
  { img: page1Img[7], x: 725, y: 0, sprName: 'p1Cloud2', sprGroup: 'spriteGroupSences/sence1', alpha: 1 },
  { img: page1Img[8], x: 0, y: 1093, sprName: 'p1Grass1', sprGroup: 'spriteGroupSences/sence1', alpha: 1 },
  { img: page1Img[9], x: 836, y: 1161, sprName: 'p1Grass2', sprGroup: 'spriteGroupSences/sence1', alpha: 1 },
  { img: page1Img[10], x: 732, y: 0, sprName: 'p1House', sprGroup: 'spriteGroupSences/sence1', alpha: 1 },
  { img: page1Img[11], x: 996, y: 600, sprName: 'p1P1', sprGroup: 'spriteGroupSences/sence1', alpha: 1 },
  { img: page1Img[12], x: 424, y: 419, sprName: 'p1Star', sprGroup: 'spriteGroupSences/sence1', alpha: 1 },
  { img: page1Img[13], x: -20, y: 604, sprName: 'p1Tree', sprGroup: 'spriteGroupSences/sence1', alpha: 1 }
]

export const page2Ele = [
  { img: page2Img[0], x: 0, y: 816, sprName: 'p21', sprGroup: 'spriteGroupSences/sence2', alpha: 1 },
  { img: page2Img[5], x: 613, y: 31, sprName: 'p2School', sprGroup: 'spriteGroupSences/sence2', alpha: 1 },
  { img: page2Img[2], x: 1298, y: 414, sprName: 'p2Huati', sprGroup: 'spriteGroupSences/sence2', alpha: 1 },
  { img: page2Img[1], x: 1508, y: 262, sprName: 'p2Boy', sprGroup: 'spriteGroupSences/sence2', alpha: 1 },
  { img: page2Img[3], x: 1932, y: 307, sprName: 'p2Lotsofyinfu', sprGroup: 'spriteGroupSences/sence2', alpha: 1 },
  { img: page2Img[4], x: 144, y: 768, sprName: 'p2Mother', sprGroup: 'spriteGroupSences/sence2', alpha: 1 },
  { img: page2Img[6], x: 1200, y: 1149, sprName: 'p2Shitou', sprGroup: 'spriteGroupSences/sence2', alpha: 1 },
  { img: page2Img[7], x: 1932, y: 49, sprName: 'p2Tree4', sprGroup: 'spriteGroupSences/sence2', alpha: 1 },
  { img: page2Img[8], x: 2243, y: 349, sprName: 'p2Wutai', sprGroup: 'spriteGroupSences/sence2', alpha: 1 },
  { img: page2Img[9], x: 3009, y: 273, sprName: 'p2Yinfu', sprGroup: 'spriteGroupSences/sence2', alpha: 1 },
  { img: page2ImgChild[0], x: 0, y: 0, sprName: 'p2Child', sprGroup: 'spriteGroupSences/sence2', alpha: 1 }
]

export const page3Ele = [
  { img: page3Img[1], x: 826, y: 142, sprName: 'p32', sprGroup: 'spriteGroupSences/sence3', alpha: 1 },
  { img: page3Img[0], x: 0, y: 80, sprName: 'p31', sprGroup: 'spriteGroupSences/sence3', alpha: 1 },
  { img: page3Img[2], x: 971, y: 24, sprName: 'p33', sprGroup: 'spriteGroupSences/sence3', alpha: 1 },
  { img: page3Img[3], x: 2397, y: 453, sprName: 'p3Childbirth', sprGroup: 'spriteGroupSences/sence3', alpha: 1 }
]

export const page4Ele = [
  { img: page4Img[0], x: 691, y: 529, sprName: 'p41', sprGroup: 'spriteGroupSences/sence4', alpha: 1 },
  { img: page4Img[1], x: 588, y: 0, sprName: 'p4Bg', sprGroup: 'spriteGroupSences/sence4', alpha: 1 },
  { img: page4Img[2], x: 0, y: 0, sprName: 'p4House3', sprGroup: 'spriteGroupSences/sence4', alpha: 1 },
  { img: page4Img[3], x: 1398, y: 0, sprName: 'p4Start', sprGroup: 'spriteGroupSences/sence4', alpha: 1 }
]
