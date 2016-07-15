// jshint  esversion: 6
class Layer {
    constructor(name, backgroundColor) {
        this.name = name;
        this.elements = {};

        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute("id", name);
        // this.canvas.setAttribute("style", 'display:none;');

        this.ctx = this.canvas.getContext('2d');
        this.ctx.canvas.width = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;
         this.ctx.canvas.style.backgroundColor  = backgroundColor;

    }

    addDrowable(drowable){
      this.elements[drowable.text] = drowable;
    }

    render() {
        this.update(this.ctx);
        this.draw(this.ctx);
        window.requestAnimationFrame(this.render.bind(this), this.ctx);
    }

    update() {

    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i of Object.values(this.elements)) {
            i.draw(this.ctx);
        }
    }
}
