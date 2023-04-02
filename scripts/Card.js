export class Card {
    #templateSelector;
    #data;
    #getTemplate;

    constructor(data, templateSelector) {
        this.#templateSelector = templateSelector;
    }
    #getTemplate() {
        const placeCard = document.querySelector(this.#templateSelector).content.cloneNode(true);
        return placeCard;
    }
}
