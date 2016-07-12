// jshint  esversion: 6
var ctx, ball, hole;

var canvas = document.getElementById('myCanvas');

if (canvas.getContext) {

    ctx = canvas.getContext('2d');
    ctx.canvas.style.backgroundColor = "rgba(0,150,255,0.1)";
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    ball = new Ball(10, canvas.width / 2 , canvas.height / 2 - 5);
    hole = new Hole(20, canvas.width / 2 + 10, canvas.height / 3 - 10);

    var rightPressed = false;
    var leftPressed = false;
    var upPressed = false;
    var downPressed = false;

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    // document.addEventListener("mousemove", mouseMoveHandler, false)



    render();
}

function onSuccess(acceleration) {
    ball.addSpeed(acceleration.x, -acceleration.y);
    // console.log('Acceleration X: ' +  + '\n' +
    //       'Acceleration Y: ' + acceleration.y + '\n');
}

function onError() {
    console.log('onError!');
}

function keyDownHandler(e) {
    switch (e.keyCode) {
        case 37:
            leftPressed = true;
            ball.addSpeed(1, 0);
            break;
        case 38:
            upPressed = true;
            ball.addSpeed(0, 1);
            break;
        case 39:
            rightPressed = true;
            ball.addSpeed(-1, 0);
            break;
        case 40:
            downPressed = true;
            ball.addSpeed(0, -1);
            break;
    }
}

function keyUpHandler(e) {
    switch (e.keyCode) {
        case 37:
            leftPressed = false;
            ball.addSpeed(1, 0);
            break;
        case 38:
            upPressed = false;
            ball.addSpeed(0, 1);
            break;
        case 39:
            rightPressed = false;
            ball.addSpeed(-1, 0);
            break;
        case 40:
            downPressed = false;
            ball.addSpeed(0, -1);
            break;
    }
}

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
    if (hole.colision(ball)) {
        document.location.reload();
    }
    ball.colisionInside(0, 0, canvas.width, canvas.height);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    hole.draw();
}
