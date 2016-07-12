// jshint  esversion: 6

var ctx, ball, hole, canvas, controls;

window.onload = () => {
    canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        ctx.canvas.style.backgroundColor = "rgb(155,205,255)";
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;

        ball = new Ball(10, canvas.width / 2, canvas.height / 2 - 5);
        hole = new Hole(20, canvas.width / 2 + 10, canvas.height / 3 - 10);
        controls = new Controls();


        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
        document.addEventListener("mousemove", mouseMoveHandler, false);
        render();
    }
};



function onSuccess(acceleration) {
    ball.addSpeed(acceleration.x, -acceleration.y);
}

function onError() {
    console.log('onError!');
}

function keyDownHandler(e) {
    switch (e.keyCode) {
        case 37:
            controls.leftPressed = true;
            ball.addSpeed(1, 0);
            break;
        case 38:
            controls.upPressed = true;
            ball.addSpeed(0, 1);
            break;
        case 39:
            controls.rightPressed = true;
            ball.addSpeed(-1, 0);
            break;
        case 40:
            controls.downPressed = true;
            ball.addSpeed(0, -1);
            break;
    }
}

function keyUpHandler(e) {
    switch (e.keyCode) {
        case 37:
            controls.leftPressed = false;
            break;
        case 38:
            controls.upPressed = false;
            break;
        case 39:
            controls.rightPressed = false;
            break;
        case 40:
            controls.downPressed = false;
            break;
    }
}

function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    var relativeY = e.clientY - canvas.offsetTop;
    if (relativeX > 0 && relativeX < canvas.width && relativeY > 0 && relativeY < canvas.height) {
        ball.addSpeed(((canvas.width / 2) - relativeX) / 5000, ((canvas.height / 2) - relativeY) / 5000);
        // ball.positionX = relativeX - 100 / 2;
        // ball.positionY = relativeY - 100 / 2;
    }
}

function render() {
    update();
    draw();
    window.requestAnimationFrame(render, ctx);
}

function update() {
    ball.friction();
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
