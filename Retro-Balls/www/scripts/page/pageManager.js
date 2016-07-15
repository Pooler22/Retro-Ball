// jshint  esversion: 6
class PageManager {
    constructor() {
        this.pages = {};
    }

    addPage(namePage, backgroundColor) {
        Page.init(namePage,backgroundColor);//new Page(namePage, backgroundColor);
        this.pages[namePage] = new Page(namePage+'Canvas', backgroundColor);
    }
    removePage() {}
    openPage() {}

    draw() {}
    update() {}
    render() {}
}
