// jshint  esversion: 6
class Controls {
    constructor() {
        this.rightPressed = false;
        this.leftPressed = false;
        this.upPressed = false;
        this.downPressed = false;
    }

    keyUpHandler(e) {
        switch (e.keyCode) {
            case 37:
                this.leftPressed = false;
                break;
            case 38:
                this.upPressed = false;
                break;
            case 39:
                this.rightPressed = false;
                break;
            case 40:
                this.downPressed = false;
                break;
        }
    }

    keyDownHandler(e) {
        switch (e.keyCode) {
            case 37:
                this.leftPressed = true;
                ball.addSpeed(1, 0);
                break;
            case 38:
                this.upPressed = true;
                ball.addSpeed(0, 1);
                break;
            case 39:
                this.rightPressed = true;
                ball.addSpeed(-1, 0);
                break;
            case 40:
                this.downPressed = true;
                ball.addSpeed(0, -1);
                break;
        }
    }

    mouseMoveHandler(e) {
        var relativeX = e.clientX - canvas.offsetLeft;
        var relativeY = e.clientY - canvas.offsetTop;
        if (relativeX > 0 && relativeX < canvas.width && relativeY > 0 && relativeY < canvas.height) {
            ball.addSpeed(((canvas.width / 2) - relativeX) / 5000, ((canvas.height / 2) - relativeY) / 5000);
        }
    }

    static onSuccess(acceleration) {
        ball.addSpeed(acceleration.x, -acceleration.y);
    }

    static onError() {
        console.log('onError!');
    }
}
