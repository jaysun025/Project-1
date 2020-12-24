let movementDisplay = movement;
let gameBoard = document.getElementById('game')
let surviver = document.getElementById('survivor')
let zomboy = document.getElementById('zomboy')
// define the game board(dom references)
// make character appear on screen

game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])

let ctx = game.getContext('2d')

function Crawler(x, y, color, width, height) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    console.log('constructin')
    this.alive = true
    this.render = function () {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        myGameArea.clear();
        myGamePiece.newPos();
        myGamePiece.update();
    }
}

let player = new Crawler(60, 50, 'pink', 20, 20);

new Date();

let gameLoop = () => {
    ctx.clearRect(0, 0, game.widht, game.height)
    movementDisplay.innerText = `X: '${hero.x}\nY: ${hero.y}`
    if (zombie.alive) {

    zombie.render();
    }
    player.render();
}


