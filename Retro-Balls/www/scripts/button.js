// jshint  esversion: 6

class Button extends Drawable {
    constructor(text, positionX, positionY, width, height, color, color2) {
        super();
        this.text = text;
        this.positionX = positionX - (width / 2);
        this.positionY = positionY - (height / 2);
        this.width = width;
        this.height = height;
        this.color = color;
        this.color2 = color2;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
        ctx.fillStyle = this.color2;
        ctx.font = Math.floor(this.height / 3) + "px Open Sans";
        ctx.fillText(this.text, this.positionX + Math.floor(this.width / 2), this.positionY + Math.floor(this.height / 2));
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    click() {
        //open

    }
    isClicked(x, y) {
        return this.positionX < x &&
            this.positionX + this.width > x &&
            this.positionY < y &&
            this.positionY + this.height > y;
    }
    selected() {
        let tmp = this.color;
        this.color = this.color2;
        this.color2 = tmp;
    }
}
