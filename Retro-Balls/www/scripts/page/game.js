// jshint  esversion: 6
class Game extends Page {

    constructor() {
        super('game', "rgb(155,205,255)");

        this.elements.ball = new Ball(10, this.canvas.width / 2, this.canvas.height / 2 - 5, "#0095DD");
        this.elements.hole = new Hole(20, this.canvas.width / 2 + 10, this.canvas.height / 3 - 10, "#0095DD");
        this.controls = new Controls();
    }

    init() {
        document.addEventListener("keydown", this.controls.keyDownHandler.bind(this.controls), false);
        document.addEventListener("keyup", this.controls.keyUpHandler.bind(this.controls), false);
        document.addEventListener("mousemove", this.controls.mouseMoveHandler.bind(this.controls), false);
        this.render();
    }

    render() {
        this.update(this.ctx);
        this.draw(this.ctx);
        window.requestAnimationFrame(this.render.bind(this), this.ctx);
    }

    update() {
        this.elements.ball.friction();
        if (this.elements.hole.colision(this.elements.ball)) {
            document.location.reload();
        }
        this.elements.ball.colisionInside(0, 0, this.canvas.width, this.canvas.height);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.elements.ball.draw();
        this.elements.hole.draw();
    }

    resize() {}
}
