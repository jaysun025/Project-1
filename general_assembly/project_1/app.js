//SELECTORS
let gameBoard = document.getElementById('game');
let survivor = new Crawler(600, 630, 'pink', 20, 20);
let zomboy = new Crawler(10, 10, 'gray', 20, 20);
let ctx = gameBoard.getContext('2d');
// let stop = () => clearInterval(gameInterval);
// let gameInterval = setInterval(gameLoop, 17);
                


// // define the game board(dom references)


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
zomboy.render();
survivor.render();
document.addEventListener('keypress', movementHandler)

let movementHandler = e => {
    switch(e.key) {
            case 'a':
            survivor.y -= 10
            break
            case 'd':
            survivor.x -= 10
            break
            }
        }
        
        
    



// let movementDisplay = movement;

// game.setAttribute('width', getComputedStyle(game)['width'])
// game.setAttribute('height', getComputedStyle(game)['height'])


// let ctx = game.getContext('2d')



// function Crawler(x, y, color, width, height) {
//     this.x = x
//     this.y = y
//     this.color = color
//     this.width = width
//     this.height = height
//     console.log('constructin')
//     this.alive = true
//     this.render = function () {
//     ctx.fillStyle = this.color
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//     }
// }



// let hero = new Crawler(60, 50, 'hotpink', 20, 20)
// let ogre = new Crawler(400, 150, '#bada55', 60, 80)

// new Date()



// let gameLoop = () => {

//     ctx.clearRect(0, 0, game.width, game.height)
   
//     // movementDisplay.innerText =`X: ${hero.x}\nY: ${hero.y}`

//     if (ogre.alive) {
  
//         ogre.render()

//         detectHit()

//     }
  


    
//     hero.render()

// }

// let detectHit = () => {

//     if(
//         hero.x + hero.width > ogre.x &&
//         hero.x < ogre.x + ogre.width &&
//         hero.y < ogre.y + ogre.height &&
//         hero.y + hero.height > ogre.y
//         ) {
            
//             ogre.alive = false;
//             document.getElementById('btm-right').innerText = 'You killed ogre';
//         }
//     }
    
   
//     let movementHandler = e => {
//     switch(e.key) {
//     // // case 'w':
   
//     // // hero.y -= 10
//     // break
//     case 'a':
     
//     hero.x -= 10
//     break
//     // case 's':
    
//     // hero.y += 10
//     // break
//     case 'd':
  
//     hero.x += 10
//     break
//     deafault; 
//     console.log('that key has no purpose here')   
//             }
            

//                 }
// let stop = () => clearInterval(gameInterval)
                
// document.addEventListener('keypress', movementHandler)
                
// let gameInterval = setInterval(gameLoop, 17);
                
                
                
                
                







