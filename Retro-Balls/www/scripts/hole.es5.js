// jshint  esversion: 6
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hole = (function () {
    function Hole(radius, positionX, positionY) {
        _classCallCheck(this, Hole);

        this.radius = radius;
        this.positionX = positionX - radius;
        this.positionY = positionY - radius;
        this.color = "#0095DD";
    }

    _createClass(Hole, [{
        key: "draw",
        value: function draw() {
            ctx.beginPath();
            ctx.arc(this.positionX, this.positionY, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }
    }, {
        key: "colision",
        value: function colision(ball) {
            if (Math.pow(this.radius + ball.radius, 2) >= Math.pow(Math.abs(ball.positionX + ball.radius - (this.positionX + this.radius)) + Math.abs(ball.positionY + ball.radius - (this.positionY + this.radius)), 2)) {
                return true;
            } else {
                return false;
            }
        }
    }]);

    return Hole;
})();

