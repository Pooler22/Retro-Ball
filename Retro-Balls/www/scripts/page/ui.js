// jshint  esversion: 6
class UI extends Page {
    constructor() {
        super('ui', "rgb(155,205,255)");
        this.elements.button1 = new Button("Start", this.ctx.canvas.width / 2, this.ctx.canvas.height / 3, 150, 50, "#0095DD", "white");
        this.elements.button2 = new Button("Opcje", this.ctx.canvas.width / 2, 2 * (this.ctx.canvas.height / 3), 150, 50, "#0095DD", "white");
    }
    init() {

        this.render();
    }

    render() {
        this.update();
        this.draw();
        window.requestAnimationFrame(this.render.bind(this), this.ctx);
    }


    update() {

    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.elements.button1.draw(this.ctx);
        this.elements.button2.draw(this.ctx);
    }

    resize() {

    }
}
