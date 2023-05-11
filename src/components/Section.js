export default class Section {
    constructor(renderer, containerSelector) {
        this._renderer = renderer;
        this._itemSection = document.querySelector(containerSelector);
    }
    renderInitialCards(items) {
        items.forEach(item => {
            this._itemSection.append(this._renderer(item));
        });
    }
    renderItem(name, link) {
        const item = {
            name: name,
            link: link,
            alt: name
        };
        this.addItem(this._renderer(item));
    }
    addItem(card) {
        this._itemSection.prepend(card);
    }
}
