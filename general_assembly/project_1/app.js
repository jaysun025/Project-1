// let movementDisplay = movement;
let gameBoard = document.getElementById('game')

// define the game board(dom references)
// make character appear on screen

gameBoard.setAttribute('width', getComputedStyle(game)['width'])
gameBoard.setAttribute('height', getComputedStyle(game)['height'])

let ctx = gameBoard.getContext('2d')

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
    // this.newPos = function() {
    //     myGameArea.clear();
    //     myGamePiece.newPos();
    //     myGamePiece.update();
    // }
}

let surviver = new Crawler(60, 50, 'pink', 20, 20);
let zomboy = new Crawler(0, 0, 'gray', 200, 200);

new Date();
surviver.render();
zomboy.render();

let gameLoop = () => {
    ctx.clearRect(0, 0, game.widht, game.height)
    movementDisplay.innerText = `X: '${hero.x}\nY: ${hero.y}`
    if (zombie.alive) {

    }
}


