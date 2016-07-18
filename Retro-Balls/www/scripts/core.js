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

        let buttonOptionsUiHome = new Button("Options", homePage.layers.ui.ctx.canvas.width / 2, 2 * homePage.layers.ui.ctx.canvas.height / 3, 150, 50, "#0095DD", "white");
        UIHomeLayer.addDrowable(buttonOptionsUiHome);



        let options = new Page('options', 'rgb(155,205,255)');
        let UIOptionsLayer = new Layer('ui', 'rgb(155,0,255)');
        options.addLayer(UIOptionsLayer);


        let buttonStartUiOptions = new Button("Dzwiek", options.layers.ui.ctx.canvas.width / 2, options.layers.ui.ctx.canvas.height / 3, 150, 50, "#0095DD", "white");
        UIOptionsLayer.addDrowable(buttonStartUiOptions);

        let buttonBackUiOptions = new Button("Back", options.layers.ui.ctx.canvas.width / 2, 2 * options.layers.ui.ctx.canvas.height / 3, 150, 50, "#0095DD", "white");
        UIOptionsLayer.addDrowable(buttonBackUiOptions);


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
      //  pageManager.pages.home.layers.ui.levelSMenu();
      startClick();
    } else if (pageManager.pages.home.layers.ui.elements.Options.isClicked(event.pageX, event.pageY)) {
      //  pageManager.pages.home.layers.ui.optionsSMenu();
      optionsClick();
    }
    context = game;
}

function startClick() {
 pageManager.openPage("levels");
}
function optionsClick() {
 pageManager.openPage("options");
}
window.onresize = function(event) {
    // context.resize();
};
