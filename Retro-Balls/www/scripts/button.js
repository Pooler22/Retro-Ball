// jshint  esversion: 6

class Button extends Drawable {
    constructor(text, positionX, positionY, width, height, color) {
      super();
        this.text = text;
        this.positionX = positionX - (width/2);
        this.positionY = positionY - (height/2);
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.fillRect (this.positionX, this.positionY, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}
