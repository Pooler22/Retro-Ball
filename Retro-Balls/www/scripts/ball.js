// jshint  esversion: 6
class Ball {
    constructor(radius, startPositionX, startPositionY) {
        this.radius = radius;
        this.startPositionX = this.positionX = startPositionX - radius;
        this.startPositionY = this.positionY = startPositionY - radius;
        this.color = "#0095DD";
        this.speedX = 0;
        this.speedY = 0;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(ball.positionX, ball.positionY, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    addSpeed(x, y) {
        this.speedX += 0.1* x;
        this.speedY += 0.1* y;
        if (this.speedX > 10) {
            this.speedX = 10;
        } else if (this.speedX < -10) {
            this.speedX = 10;
        }
        if (this.speedY > 10) {
            this.speedY = -10;
        } else if (this.speedY < -10) {
            this.speedY = -10;
        }
    }
}
