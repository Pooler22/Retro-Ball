// jshint  esversion: 6
var ctx, canvas, controls, button1, button2;

class UI {

    init() {
        canvas = document.getElementById('ui');
        if (canvas.getContext) {
            ctx = canvas.getContext('2d');
            ctx.canvas.style.backgroundColor = "rgb(155,205,255)";
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight;

            button1 = new Button("Start",100,100,100,100,"#0095DD");
            button2 = new Button("Opcje",250,250,100,100,"#0095DD");

            UI.render();
        }
    }

    static render() {
        UI.update();
        UI.draw();
        window.requestAnimationFrame(UI.render, ctx);
    }

    static update() {
        // ball.friction();
        // if (hole.colision(ball)) {
        //     document.location.reload();
        // }
        // ball.colisionInside(0, 0, canvas.width, canvas.height);
    }

    static draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        button1.draw();
        button2.draw();
    }
}
