// jshint  esversion: 6
class Circle extends Drawable {
    constructor(radius, positionX, positionY, color) {
      super();
        this.radius = radius;
        this.positionX = positionX - radius;
        this.positionY = positionY - radius;
        this.color = color;
    }

    draw() {
        game.ctx.beginPath();
        game.ctx.arc(this.positionX, this.positionY, this.radius, 0, Math.PI * 2);
        game.ctx.fillStyle = this.color;
        game.ctx.fill();
        game.ctx.closePath();
    }
}
