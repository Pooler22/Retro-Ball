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
        ctx.beginPath();
        ctx.arc(this.positionX, this.positionY, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}
