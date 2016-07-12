// jshint  esversion: 6
var ctx, ball, hole, canvas, controls;


class Game {

    init() {
        canvas = document.getElementById('game');
        if (canvas.getContext) {
            ctx = canvas.getContext('2d');
            ctx.canvas.style.backgroundColor = "rgb(155,205,255)";
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight;

            ball = new Ball(10, canvas.width / 2, canvas.height / 2 - 5, "#0095DD");
            hole = new Hole(20, canvas.width / 2 + 10, canvas.height / 3 - 10, "#0095DD");
            controls = new Controls();

            document.addEventListener("keydown", controls.keyDownHandler, false);
            document.addEventListener("keyup", controls.keyUpHandler, false);
            document.addEventListener("mousemove", controls.mouseMoveHandler, false);
            Game.render();
        }
    }

    static render() {
        Game.update();
        Game.draw();
        window.requestAnimationFrame(Game.render, ctx);
    }

    static update() {
        ball.friction();
        if (hole.colision(ball)) {
            document.location.reload();
        }
        ball.colisionInside(0, 0, canvas.width, canvas.height);
    }

    static draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ball.draw();
        hole.draw();
    }
}
