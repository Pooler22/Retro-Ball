// jshint  esversion: 6
class Hole extends Circle {

    colision(ball) {
        if (Math.pow((this.radius + ball.radius), 2) >= Math.pow(Math.abs((ball.positionX) - (this.positionX)) +
                Math.abs((ball.positionY) - (this.positionY)), 2)) {
            return true;
        } else {
            return false;
        }
    }
}
