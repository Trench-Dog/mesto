export default class Section {
    constructor(renderer, containerSelector) {
        this._renderer = renderer;
        this._itemSection = document.querySelector(containerSelector);
    }
    renderInitialCards(items, userId) {
        items.forEach(item => {
            let isOwner = () => {
                if (userId === item.owner._id) {
                    return true;
                } else {
                    return false;
                }
            };
            this._itemSection.append(this._renderer(item, item.likes.length, isOwner()));
        });
    }
    renderItem(name, link, likes, isOwner, id) {
        const item = {
            name: name,
            link: link,
            alt: name,
            _id: id
        };
        this.addItem(this._renderer(item, likes, isOwner));
    }
    addItem(card) {
        this._itemSection.prepend(card);
    }
}
