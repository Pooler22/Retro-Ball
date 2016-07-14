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
                game.elements.ball.addSpeed(1, 0);
                break;
            case 38:
                this.upPressed = true;
                game.elements.ball.addSpeed(0, 1);
                break;
            case 39:
                this.rightPressed = true;
                game.elements.ball.addSpeed(-1, 0);
                break;
            case 40:
                this.downPressed = true;
                game.elements.ball.addSpeed(0, -1);
                break;
        }
    }

    mouseMoveHandler(e) {
        var relativeX = e.clientX - game.canvas.offsetLeft;
        var relativeY = e.clientY - game.canvas.offsetTop;
        if (relativeX > 0 && relativeX < game.canvas.width && relativeY > 0 && relativeY < game.canvas.height) {
            game.elements.ball.addSpeed(((game.canvas.width / 2) - relativeX) / 5000, ((game.canvas.height / 2) - relativeY) / 5000);
        }
    }

    static onSuccess(acceleration) {
        game.elements.ball.addSpeed(acceleration.x, -acceleration.y);
    }

    static onError() {
        console.log('onError!');
    }
}
