const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024 // 64*16
canvas.height = 576 //64*9

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.width = 100
        this.height = 100
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        if (bottom < canvas.height) {
            y++
            bottom = y + 100
        }
    }
}

const player = new Player()


//let bottom = y + 100
function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = ('white')
    c.fillRect(0, 0, canvas.width, canvas.height) //(x, y, width, height)

    player.draw()

}
animate()