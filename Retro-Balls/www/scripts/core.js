// jshint  esversion: 6

var pageManager;
window.onload = () => {
    if (Page.checkCanvas) {
        pageManager = new PageManager();

        //home page
        let homePage = new Page('home');
        pageManager.addPage(homePage);

        let backgroundHomeLayer = new Layer('background', 'rgb(155,105,255)');
        homePage.addLayer(backgroundHomeLayer);

        let uiHomeLayer = new Layer('ui', 'rgb(155,105,255)');
        homePage.addLayer(uiHomeLayer);

        uiHomeLayer.canvas.addEventListener("mousedown", doMouseDownStart.bind(uiHomeLayer.elements), false);

        let buttonStartUiHome = new Button("Start", uiHomeLayer.canvas.width / 2, uiHomeLayer.canvas.height / 3, 150, 50, "#0095DD", "white");
        uiHomeLayer.addDrowable(buttonStartUiHome);

        let buttonOptionsUiHome = new Button("Options", uiHomeLayer.canvas.width / 2, 2 * uiHomeLayer.ctx.canvas.height / 3, 150, 50, "#0095DD", "white");
        uiHomeLayer.addDrowable(buttonOptionsUiHome);

        //options page
        let optionsPage = new Page('options');
        pageManager.addPage(optionsPage);

        let uiOptionsLayer = new Layer('ui', 'rgb(155,0,255)');
        optionsPage.addLayer(uiOptionsLayer);
        uiOptionsLayer.canvas.addEventListener("mousedown", doMouseDownOptions.bind(uiOptionsLayer.elements), false);


        let buttonStartUiOptions = new Button("Sound", uiOptionsLayer.canvas.width / 2, uiOptionsLayer.canvas.height / 3, 150, 50, "#0095DD", "white");
        uiOptionsLayer.addDrowable(buttonStartUiOptions);

        let buttonBackUiOptions = new Button("Back", uiOptionsLayer.canvas.width / 2, 2 * uiOptionsLayer.canvas.height / 3, 150, 50, "#0095DD", "white");
        uiOptionsLayer.addDrowable(buttonBackUiOptions);

        //levels page
        let levels = new Page('levels', 'rgb(205,205,255)');
        pageManager.addPage(levels);

        let uiLevelsLayer = new Layer('ui', 'rgb(155,0,255)');
        levels.addLayer(uiLevelsLayer);

        let buttonStartUiLevels = new Button("1", uiHomeLayer.canvas.width / 2, uiHomeLayer.canvas.height / 3, 150, 50, "#0095DD", "white");
        uiLevelsLayer.addDrowable(buttonStartUiLevels);

        let buttonOptionsUiLevels = new Button("Back", uiHomeLayer.canvas.width / 2, 2 * uiHomeLayer.ctx.canvas.height / 3, 150, 50, "#0095DD", "white");
        uiLevelsLayer.addDrowable(buttonOptionsUiLevels);

        //game page
        let game = new Page('game', 'rgb(155,155,255)');
        pageManager.addPage(game);

        let uiGameLayer = new Layer('ui', 'rgb(155,0,255)');
        game.addLayer(uiGameLayer);

        pageManager.openPage('home');

        pageManager.render();
    }
};


function doMouseDownStart(event) {
    if (this.Start.isClicked(event.pageX, event.pageY)) {
        //  pageManager.pages.home.layers.ui.levelSMenu();
        pageManager.openPage("levels");
    } else if (this.Options.isClicked(event.pageX, event.pageY)) {
        //  pageManager.pages.home.layers.ui.optionsSMenu();
        pageManager.openPage("options");
    }
    context = game;
}

function doMouseDownOptions(event) {
    if (this.Sound.isClicked(event.pageX, event.pageY)) {
        //  pageManager.pages.home.layers.ui.levelSMenu();
        // pageManager.openPage("options");
    } else if (this.Back.isClicked(event.pageX, event.pageY)) {
        //  pageManager.pages.home.layers.ui.optionsSMenu();
        pageManager.openPage("home");
    }
    context = game;
}

window.onresize = function(event) {
    // context.resize();
};
