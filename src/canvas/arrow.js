import C from './utils'
export default class Arrow {
  constructor(props) {
    this.W = 800
    this.H = 600
    this.x = this.W / 2
    this.y = this.H / 2
    this.w = 180
    this.h = 60
    this.fillStyle = 'rgba(57,119,224)'
    this.strokeStyle = 'rgba(0,0,0,0)'
    this.rotation = 0
    this.ctx = null
    this.canvas = null
    this.rotateSpeed = 1
    Object.assign(this, props)
    this.initCanvas()
  }

  initCanvas() {
    this.canvas = document.getElementById('stage')
    this.ctx = this.canvas.getContext('2d')
    this.canvas.width = this.W
    this.canvas.height = this.H
    return this
  }

  getCanvas() {
    return this.canvas
  }

  rotateArrow() {
    const { x, y, ctx, W, H } = this
    this.canvas.addEventListener('mousemove', (ev) => {
      const { x: courseX, y: courseY } = C.eventWrapper(ev)
      const dx = courseX - x
      const dy = courseY - y
      this.rotation = Math.atan2(dy, dx)
      ctx.clearRect(0, 0, W, H)
      this.render()
    })
  }

  flowMouseAndRotate() {
    const { ctx, W, H, w, h } = this
    this.canvas.addEventListener('mousemove', (ev) => {
      const { x: courseX, y: courseY } = C.eventWrapper(ev)
      const speed = 3
      const dx = courseX - this.x
      const dy = courseY - this.y
      const radian = Math.atan2(dy, dx)
      console.log(radian)
      const vx = speed * Math.cos(radian)
      const vy = speed * Math.sin(radian)
      this.x += vx
      this.y += vy
      this.rotation = radian
      ctx.clearRect(0, 0, W, H)
      this.render()
    })
  }

  autoRotate() {
    const _this = this
    const { ctx, W, H, w, h } = this
    window.requestAnimationFrame(() => {
      _this.autoRotate()
    })
    this.rotateSpeed += 3
    let radian = this.rotateSpeed * (Math.PI / 180)
    radian %= Math.PI * 2
    this.rotation = radian
    this.rao
    ctx.clearRect(0, 0, W, H)
    this.render()
  }

  drawArrow() {
    const { ctx, w, h } = this
    ctx.beginPath()
    ctx.moveTo(-w / 2, -h / 2)
    ctx.lineTo(w / 10, -h / 2)
    ctx.lineTo(w / 10, -h)
    ctx.lineTo(w / 2, 0)
    ctx.lineTo(w / 10, h)
    ctx.lineTo(w / 10, h / 2)
    ctx.lineTo(-w / 2, h / 2)

    ctx.closePath()
    return this
  }

  render() {
    const { ctx, x, y, fillStyle, rotation, w } = this
    ctx.save()
    ctx.fillStyle = fillStyle
    ctx.strokeStyle = fillStyle
    ctx.translate(x, y)
    ctx.rotate(rotation)
    this.drawArrow()
    ctx.fill()
    ctx.stroke()
    ctx.restore()
    return this
  }
}
