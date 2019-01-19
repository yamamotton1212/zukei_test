const drawLine = (ctx, x0, y0, x1, y1) => {
  ctx.beginPath()
  ctx.moveTo(x0,y0 )
  ctx.lineTo(x1,y1)
  ctx.stroke()
}

const drawCircle = (ctx, cx, cy, r) => {
ctx.beginPath()
ctx.arc(cx, cy, r, 0, Math.PI * 2)
ctx.closePath()
ctx.fill()
}

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const {width, height} = canvas
drawLine(ctx, 0, 0, width, height)
ctx.strokeStyle = 'red'
drawLine(ctx, width, 0, 0, height)

drawCircle(ctx, 100, 100, 50)
ctx.fillStyle = 'blue'
drawCircle(ctx, 200, 200, 50)