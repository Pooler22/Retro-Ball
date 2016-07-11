// jshint  esversion: 6
class Hole {
    constructor(radius, positionX, positionY) {
        this.radius = radius;
        this.positionX = positionX - radius;
        this.positionY = positionY - radius;
        this.color = "#0095DD";
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.positionX, this.positionY, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    colision(ball) {
        if (Math.pow((this.radius + ball.radius), 2) >= Math.pow(Math.abs((ball.positionX + ball.radius) - (this.positionX + this.radius)) +
                Math.abs((ball.positionY + ball.radius) - (this.positionY + this.radius)), 2)) {
            return true;
        } else {
            return false;
        }
    }
}
