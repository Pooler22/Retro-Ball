// jshint  esversion: 6
var context;
var game;
var ui;
var backgorund;
window.onload = () => {
    if (Page.checkCanvas) {
        var pageManager = new PageManager();
        pageManager.addPage('home');
        pageManager.addPage('options');
        pageManager.addPage('levels');
        //pageManager.addPage('game');

        pageManager.openPage('home');

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
