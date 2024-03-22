const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024 // 64*16
canvas.height = 576 //64*9

c.fillStyle = ('white')
c.fillRect(0, 0, canvas.width, canvas.height) //(x, y, width, height)

let y= 100
function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'red'
    c.fillRect(100, y, 100, 100)
    y++
}
animate()