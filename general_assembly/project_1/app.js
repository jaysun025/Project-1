// Have more than one zombie on screen at once
// Make them fall through a loop so they keep coming back
// No win function just loss
// Increase number of zombies 


//SELECTORS
let gameBoard = document.getElementById('game');
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
let zomboy = new Crawler(Math.floor(Math.random() * 1000 + 1), 0, 'gray', 20, 20);
let zomboyOne = new Crawler(Math.floor(Math.random() * 1000 + 1), 0, 'blue', 20, 20);
  
function zomboyMove(zomboy){
    if (zomboy !== null) {
        zomboy.y +=10;
    }
}


let gameLoop = () => {
    ctx.clearRect(0, 0, game.width, game.height)
    if (survivor.alive) {
        survivor.render();
        deadSurvivor();
    }
    zomboy.render();
    zomboyMove(zomboy) 
    if(zomboy.y === game.height) {
        zomboyOne.render();
    }
}



let movementHandler= e => {
    switch(e.key) {
    case 'a':
    if(survivor.x > 0) {
        survivor.x -=50
    }
    break
    case 'd':
    if(survivor.x < game.width - (survivor.width * 2.5)) {
        survivor.x +=50
    }
    break   
    }
        }

    let deadSurvivor = () => {
    if(zomboy.x + zomboy.width > survivor.x &&
        zomboy.x < survivor.x + survivor.width &&
        zomboy.y < survivor.y + survivor.height &&
        zomboy.y + zomboy.height > survivor.y) {
            survivor.alive = false;
    }
}

let stop = () => clearInterval(gameInterval);
let gameInterval = setInterval(gameLoop, 50);
document.addEventListener('keypress', movementHandler);

    
 
        


        
