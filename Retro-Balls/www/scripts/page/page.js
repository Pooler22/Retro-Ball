// jshint  esversion: 6
class Page {
    constructor(name) {
        this.name = name;
        this.active = false;
        this.layers = {};

        this.content = document.createElement('div');
        this.content.setAttribute("id", name);
        this.content.setAttribute("style", 'display:none;');
        document.body.appendChild(this.content);
    }

    openPage() {
        this.content.style.display = null;
    }

    addLayer(layer) {
        this.layers[layer.name] = layer;
        document.getElementById(this.name).appendChild(this.layers[layer.name].canvas);
    }

    render() {
        if (this.active) {
            this.update();
            this.draw();
            window.requestAnimationFrame(this.render.bind(this), this.ctx);
        }
    }

    update() {

    }

    draw() {
        for (let i of Object.values(this.layers)) {
            i.draw();
        }
    }

    static checkCanvas(nameCanvas) {
        if (document.getElementById(nameCanvas).getContext) {
            return true;
        } else {
            return false;
        }
    }
}
