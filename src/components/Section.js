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
    addItem(name, link) {
        const item = {
            name: name,
            link: link,
            alt: name
        };
        this._itemSection.prepend(this._renderer(item));
    }
}
