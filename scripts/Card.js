import { openPopup } from './index.js';
export default class Card {
    constructor(name, link, alt, templateSelector) {
        this._templateSelector = templateSelector;
        this._name = name;
        this._link = link;
        this._alt = alt;
    }
    _getTemplate() {
        const placeCard = document.querySelector(this._templateSelector).content.cloneNode(true);
        return placeCard;
    }
    generateCard() {
        this._card = this._getTemplate();
        this._image = this._card.querySelector('.place__image');
        this._title = this._card.querySelector('.place__title');
        this._likeButton = this._card.querySelector('.place__button');
        this._deleteButton = this._card.querySelector('.place__delete-button');
        this._setEventListeners();
        this._image.setAttribute('src', this._link);
        this._image.setAttribute('alt', this._alt);
        this._title.textContent = this._name;
        return this._card;
    }
    _setEventListeners() {
        this._image.addEventListener('click', () => {
            this._openImagePopup();
        });
        this._likeButton.addEventListener('click', () => {
            this._likeButton.classList.toggle('place__button_active');
        });
        this._deleteButton.addEventListener('click', () => {
            const deletedCard = this._deleteButton.closest('.place');
            deletedCard.remove();
        });
    }
    _openImagePopup() {
        openPopup(imagePopup);
        fullImage.setAttribute('src', this._link);
        fullImage.setAttribute('alt', this._alt);
        fullImageTitle.textContent = this._name;
    }
}
