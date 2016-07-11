// jshint  esversion: 6

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

var ball = new Ball(10, canvas.width / 2, canvas.height / 2);
var hole = new Hole(20, canvas.width / 3, canvas.height / 3);


var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
// document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
        ball.addSpeed(-1, 0);
    } else if (e.keyCode == 37) {
        leftPressed = true;
        ball.addSpeed(1, 0);
    } else if (e.keyCode == 38) {
        upPressed = true;
        ball.addSpeed(0, 1);
    } else if (e.keyCode == 40) {
        downPressed = true;
        ball.addSpeed(0, -1);
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    } else if (e.keyCode == 37) {
        leftPressed = false;
    } else if (e.keyCode == 38) {
        upPressed = false;
    } else if (e.keyCode == 40) {
        downPressed = false;
    }
}
//
// function mouseMoveHandler(e) {
//     var relativeX = e.clientX - canvas.offsetLeft;
//     var relativeY = e.clientY - canvas.offsetTop;
//     if (relativeX > 0 && relativeX < canvas.width && relativeY > 0 && relativeY < canvas.height) {
//         ball.addSpeed((canvas.width / 2) - e.clientX, (canvas.height / 2) - e.clientY);
//         // ball.positionX = relativeX - 100 / 2;
//         // ball.positionY = relativeY - 100 / 2;
//     }
// }


function render() {
    update();
    draw();
    requestAnimationFrame(render);
}

function update() {
    // if (x + dx > canvas.width - ball.radius || x + dx < ball.radius) {
    //     dx = -dx;
    // }
    // if (y + dy > canvas.height - ball.radius || y + dy < ball.radius) {
    //     dy = -dy;
    // }

    if (hole.colision(ball)) {
        document.location.reload();
    }

    if (rightPressed && ball.positionX < canvas.width - 100) {
        ball.positionX += ball.speedX;
    } else if (leftPressed && ball.positionX > 0) {
        ball.positionX -= ball.speedX;
    } else if (upPressed && ball.positionY > 0) {
        ball.positionY -= ball.speedY;
    } else if (downPressed && ball.positionY < canvas.height) {
        ball.positionY += ball.speedY;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    hole.draw();
}

render();
