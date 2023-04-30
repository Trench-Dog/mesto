export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._initialItems = items;
        this._renderer = renderer;
        this._itemSection = document.querySelector(containerSelector);
    }
    renderInitialCards() {
        this._initialItems.forEach(item => {
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
