// jshint  esversion: 6
var context;
var game;
var ui;
var backgorund;
window.onload = () => {
    if (Page.checkCanvas) {
        game = new Game();
        ui = new UI();
        backgorund = new Background();

        context = ui;
        game.init();
    }
};

window.onresize = function(event) {
    context.resize();
};
