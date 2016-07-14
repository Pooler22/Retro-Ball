// jshint  esversion: 6
class Ball extends Circle {
    constructor(radius, positionX, positionY, color) {
        super(radius, positionX, positionY, color);
        this.speedX = 0;
        this.speedY = 0;
    }

    addSpeed(x, y) {
        this.speedX += 0.2 * x;
        this.speedY += 0.2 * y;
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
    colisionInside(x, y, width, height) {
        this.positionX -= this.speedX;
        this.positionY -= this.speedY;
        if (this.positionX - this.radius <= x) {
            this.positionX = x + this.radius;
            this.speedX -= 0.1;
        }
        if (this.positionX + this.radius >= width + x) {
            this.positionX = width + x - this.radius;
            this.speedX += 0.1;
        }
        if (this.positionY - this.radius <= y) {
            this.positionY = y + this.radius;
            this.speedY -= 0.1;
        }
        if (this.positionY + this.radius >= height + y) {
            this.positionY = height + y - this.radius;
            this.speedY += 0.1;
        }
    }

    friction() {
        if (this.speedX !== 0) {
            if (this.speedX > 0) {
                this.addSpeed(-0.1, 0);
            } else {
                this.addSpeed(0.1, 0);
            }
        }
        if (this.speedY !== 0) {
            if (this.speedY > 0) {
                this.addSpeed(0, -0.1);
            } else {
                this.addSpeed(0, 0.1);
            }
        }
    }
}
