//SELECTORS
let gameBoard = document.getElementById('game')
let surviver = new Crawler(600, 630, 'pink', 20, 20);
let zomboy = new Crawler(10, 10, 'gray', 20, 20);
let ctx = gameBoard.getContext('2d')

// define the game board(dom references)


//EVENT CALLERS
gameBoard.setAttribute('width', getComputedStyle(game)['width'])
gameBoard.setAttribute('height', getComputedStyle(game)['height'])


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

}

function leftArrowPressed() {
    var element = document.getElementById("survivor");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
    }
function rightArrowPressed() {
    var element = document.getElementById("survivor");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
    }

    function moveSelection(evt) {
        switch (evt.keyCode) {
            case 37:
            leftArrowPressed();
            break;
            case 39:
            rightArrowPressed();
            break;
        }
    }

new Date();
surviver.render();
zomboy.render();






