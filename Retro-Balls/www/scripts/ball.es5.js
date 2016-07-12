// jshint  esversion: 6
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ball = (function () {
    function Ball(radius, startPositionX, startPositionY) {
        _classCallCheck(this, Ball);

        this.radius = radius;
        this.startPositionX = this.positionX = startPositionX - radius;
        this.startPositionY = this.positionY = startPositionY - radius;
        this.color = "#0095DD";
        this.speedX = 0;
        this.speedY = 0;
    }

    _createClass(Ball, [{
        key: "draw",
        value: function draw() {
            ctx.beginPath();
            ctx.arc(ball.positionX, ball.positionY, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }
    }, {
        key: "addSpeed",
        value: function addSpeed(x, y) {
            this.speedX += 0.1 * x;
            this.speedY += 0.1 * y;
            if (this.speedX > 10) {
                this.speedX = 10;
            } else if (this.speedX < -10) {
                this.speedX = 10;
            }
            if (this.speedY > 10) {
                this.speedY = -10;
            } else if (this.speedY < -10) {
                this.speedY = -10;
            }
        }
    }, {
        key: "colisionInside",
        value: function colisionInside(x, y, width, height) {
            this.positionX -= this.speedX;
            this.positionY -= this.speedY;
            if (this.positionX - this.radius <= x) {
                this.positionX = x + this.radius;
                this.speedX -= 0.1;
            }
            if (this.positionX + this.radius >= width + x) {
                this.positionX = width + x - this.radius;
                this.speedX += 0.1;
            }
            if (this.positionY - this.radius <= y) {
                this.positionY = y + this.radius;
                this.speedY -= 0.1;
            }
            if (this.positionY + this.radius >= height + y) {
                this.positionY = height + y - this.radius;
                this.speedY += 0.1;
            }
        }
    }]);

    return Ball;
})();

