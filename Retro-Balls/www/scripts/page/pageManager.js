// jshint  esversion: 6
class PageManager {
    constructor() {
        this.pages = {};
    }

    addPage(page) {
        this.pages[page.name] = page;
    }

    openPage(namePage) {
        this.pages[namePage].openPage();
    }

    removePage() {}

    render() {
        this.pages.home.render();
    }
    draw() {

    }
    update() {}
}
