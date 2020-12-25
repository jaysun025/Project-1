//SELECTORS

// let movementDisplay = movement;
let gameBoard = document.getElementById('game')

// define the game board(dom references)
// make character appear on screen

//EVENT CALLERS
gameBoard.setAttribute('width', getComputedStyle(game)['width'])
gameBoard.setAttribute('height', getComputedStyle(game)['height'])

let ctx = gameBoard.getContext('2d')

//FUNCTIONS

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

let surviver = new Crawler(600, 630, 'pink', 20, 20);
let zomboy = new Crawler(0, 0, 'gray', 20, 20);

new Date();
surviver.render();
zomboy.render();

let gameLoop = () => {
    ctx.clearRect(0, 0, game.width, game.height)
    if (zomboy.alive) {
// use function to detect hit
// call function is curly boys
    }
    // define function
}

let movementHandler = e => {
    switch(e.key) {
    case 'w':
    //do some stuff
    surviver.y -= 10
    break
    case 'a':
     //move left
    surviver.x -= 10
    break
    case 's':
    // move down
    surviver.y += 10
    break
    case 'd':
    // move right
    surviver.x += 10
    break
    deafault; 
    console.log('that key has no purpose here')   
            }
        }
