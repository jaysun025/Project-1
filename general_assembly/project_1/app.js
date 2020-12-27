// Make zombie move down in a straight line
// When zombies go off screen put in the garbage
// When zombie makes contact survivor dies(disappears)GAME OVER MAN!!!
// Make zombies appear at random from different points at the top =>
// of the screen.
// Have a clock going see how long they survivor for
// Increase number of zombies after an amount of time passes


//SELECTORS
let gameBoard = document.getElementById('game');
// let movementDisplay = game;
let ctx = gameBoard.getContext('2d');

                


// //EVENT CALLERS
gameBoard.setAttribute('width', getComputedStyle(game)['width'])
gameBoard.setAttribute('height', getComputedStyle(game)['height'])



// FUNCTIONS

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
    
}

let survivor = new Crawler(600, 630, 'pink', 20, 20);
let zomboy = new Crawler(10, 10, 'gray', 20, 20);
  
function zomboyMove(zomboy){
    // while(zomboy.y < 100){
    //     zomboy.y += 10;

    // }
 let cpMove = setInterval (function () {
    zomboy.y += 10;
 }, 1000); 
 if(zomboy.y > 300) {
     clearInterval(cpMove)
 }
}

let gameLoop = () => {
ctx.clearRect(0, 0, game.width, game.height)
// movementDisplay.innerText = `X: ${survivor.x}\nY: ${survivor.y}`
if (survivor.alive) {
    survivor.render();
}
zomboy.render();
zomboyMove(zomboy);
}



let movementHandler= e => {
    switch(e.key) {
    case 'a':
    if(survivor.x > 0) {
        survivor.x -=50
    }
    break
    case 'd':
    if(survivor.x < game.width - (survivor.width * 3)) {
        survivor.x +=50
    }
    break   
    }
        }
let stop = () => clearInterval(gameInterval);
let gameInterval = setInterval(gameLoop, 50);
document.addEventListener('keypress', movementHandler);

    
 
        


        
