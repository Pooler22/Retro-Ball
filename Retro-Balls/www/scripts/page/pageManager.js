// jshint  esversion: 6
class PageManager {
    constructor() {
        this.pages = {};
        this.activePage = "";
    }

    addPage(page) {
        this.pages[page.name] = page;
    }

    openPage(namePage) {
        if (this.activePage !== "") {
            this.pages[this.activePage].active = false;
            this.pages[this.activePage].content.setAttribute("style", 'display:none;');
        }
        this.activePage = namePage;
        this.pages[this.activePage].active = true;
        this.pages[namePage].openPage();
        this.render();
    }

    removePage() {}

    render() {
        console.log(this.activePage);
        this.pages[this.activePage].render();
    }
    draw() {

    }
    update() {}
}
