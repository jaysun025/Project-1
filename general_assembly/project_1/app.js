//SELECTORS
let gameBoard = document.getElementById('game');
let movementDisplay = game;
let ctx = gameBoard.getContext('2d');

                


// //EVENT CALLERS
gameBoard.setAttribute('width', getComputedStyle(game)['width'])
gameBoard.setAttribute('height', getComputedStyle(game)['height'])



// //FUNCTIONS

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



let gameLoop = () => {
ctx.clearRect(0, 0, game.width, game.height)
movementDisplay.innerText = `X: ${survivor.x}\nY: ${survivor.y}`
if (survivor.alive) {
    survivor.render();
}
zomboy.render();
}



let movementHandler= e => {
    switch(e.key) {
    case 'a':
    survivor.x -=50
    break
    case 'd':
    survivor.x +=50
    break
    deafault; 
    console.log('that key has no purpose here')   
            }
        }
        let stop = () => clearInterval(gameInterval);
        let gameInterval = setInterval(gameLoop, 50);
        document.addEventListener('keypress', movementHandler);
    
        
        
        
        
