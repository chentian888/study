class C {
  static getOffset(ele) {
    let mouse = { x: 0, y: 0 }
    console.log(ele)
    ele.addEventListener('mousemove', (ev) => {
      const { x, y } = this.eventWrapper(ev)
      mouse.x = x
      mouse.y = y
      // console.log(ev)
    })
    return mouse
  }

  static eventWrapper(ev) {
    const { pageX, pageY, target } = ev
    const { left, top } = target.getBoundingClientRect()
    return { x: pageX - left, y: pageY - top }
  }

  // 角度转弧度
  static toRad(angle) {
    return angle * (Math.PI / 180)
  }

  // 弧度转角度
  static toAngle(rad) {
    return rad * (180 / Math.PI)
  }
}

export default C
