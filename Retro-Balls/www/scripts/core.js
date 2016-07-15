// jshint  esversion: 6
// var context;
// var game;
// var ui;
// var backgorund;
var pageManager;
window.onload = () => {
    if (Page.checkCanvas) {
        pageManager = new PageManager();

        let homePage = new Page('home');
        pageManager.addPage(homePage);

        let backgroundHomeLayer = new Layer('background', 'rgb(155,105,255)');
        homePage.addLayer(backgroundHomeLayer);

        let UIHomeLayer = new Layer('ui', 'rgb(155,105,255)');
        homePage.addLayer(UIHomeLayer);

        homePage.layers.ui.canvas.addEventListener("mousedown", doMouseDown, false);

        let buttonStartUiHome = new Button("Start", homePage.layers.ui.ctx.canvas.width / 2, homePage.layers.ui.ctx.canvas.height / 3, 150, 50, "#0095DD", "white");
        UIHomeLayer.addDrowable(buttonStartUiHome);

        let buttonStartUiOptions = new Button("Options", homePage.layers.ui.ctx.canvas.width / 2, 2 * homePage.layers.ui.ctx.canvas.height / 3, 150, 50, "#0095DD", "white");
        UIHomeLayer.addDrowable(buttonStartUiOptions);



        let options = new Page('options', 'rgb(155,205,255)');
        let levels = new Page('levels', 'rgb(205,205,255)');
        let game = new Page('game', 'rgb(155,155,255)');


        pageManager.addPage(options);
        pageManager.addPage(levels);
        pageManager.addPage(game);

        pageManager.openPage('home');

        pageManager.render();
        // game = new Game();
        // ui = new UI();
        // backgorund = new Background();
        //
        // context = ui;
        // game.init();
    }
};


function doMouseDown(event) {
    if (pageManager.pages.home.layers.ui.elements.Start.isClicked(event.pageX, event.pageY)) {
        pageManager.pages.home.layers.ui.levelSMenu();
    } else if (pageManager.pages.home.layers.ui.elements.Options.isClicked(event.pageX, event.pageY)) {
        pageManager.pages.home.layers.ui.optionsSMenu();
    }
    context = game;
}

window.onresize = function(event) {
    // context.resize();
};
