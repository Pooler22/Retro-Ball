// jshint  esversion: 6
class Page {
    constructor(nameCanvas, colorBackground) {
        this.canvas = document.getElementById(nameCanvas);
        this.ctx = this.canvas.getContext('2d');
        this.ctx.canvas.style.backgroundColor = colorBackground;
        this.ctx.canvas.width = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;

        this.elements = [];
    }

    static checkCanvas(nameCanvas) {
      if(document.getElementById(nameCanvas).getContext){
        return true;
      }
      else{
        return false;
      }

    }
}
