export default class Section {
    constructor(renderer, containerSelector) {
        this._renderer = renderer;
        this._itemSection = document.querySelector(containerSelector);
    }
    renderInitialCards(items, userId) {
        items.forEach(item => {
            this._userId = userId;
            this._itemSection.append(
                this._renderer(item, item.likes.length, this._userId, item.owner._id)
            );
        });
    }
    renderItem(name, link, likes, ownerId, cardId) {
        const item = {
            name: name,
            link: link,
            alt: name,
            _id: cardId
        };
        this.addItem(this._renderer(item, likes, this._userId, ownerId));
    }
    addItem(card) {
        this._itemSection.prepend(card);
    }
}
