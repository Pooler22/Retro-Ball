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
      if(this.activePage !== ""){
          this.pages[this.activePage].content.setAttribute("style", 'display:none;');
      }

        this.activePage = namePage;
        this.pages[namePage].openPage();
    }

    removePage() {}

    render() {
        this.pages[this.activePage].render();
    }
    draw() {

    }
    update() {}
}
