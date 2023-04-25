export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._initialCards = items;
        this._renderer = renderer;
        this._containerSelector = containerSelector;
    }
    renderInitialCards() {
        this._initialCards.forEach(() => {
            this._renderer;
        });
    }
    addItem() {}
}
