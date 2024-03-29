export default class Card {
    constructor(
        name,
        link,
        templateSelector,
        handleCardClick,
        openConfirmationPopup,
        likeNumber,
        userId,
        ownerId,
        cardId,
        putLike,
        removeLike
    ) {
        this._templateSelector = templateSelector;
        this._name = name;
        this._link = link;
        this._alt = name;
        this._handleCardClick = handleCardClick;
        this._openConfirmationPopup = openConfirmationPopup;
        this._likeNumber = likeNumber;
        this._userId = userId;
        this._ownerId = ownerId;
        this._cardId = cardId;
        this._putLike = putLike;
        this._removeLike = removeLike;
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
        this._likeCounter = this._card.querySelector('.place__like-counter');
        this._deleteButton = this._card.querySelector('.place__delete-button');
        if (this._userId !== this._ownerId) {
            this._deleteButton.remove();
        }
        this._image.setAttribute('src', this._link);
        this._image.setAttribute('alt', this._alt);
        this._title.textContent = this._name;
        this._likeCounter.textContent = this._likeNumber;
        this._setEventListeners();
        return this._card;
    }
    setLikes(likeNumber) {
        this._likeCounter.textContent = likeNumber;
    }
    _toggleLike() {
        if (this._likeButton.classList.contains('place__button_active')) {
            this._removeLike(this._cardId);
        } else {
            this._putLike(this._cardId);
        }
    }
    toggleButtonState() {
        this._likeButton.classList.toggle('place__button_active');
    }
    _setEventListeners() {
        this._image.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
        this._likeButton.addEventListener('click', () => {
            this._toggleLike();
        });
        this._deleteButton.addEventListener('click', () => {
            this._openConfirmationPopup(this._cardId);
        });
    }
    deleteCard() {
        this._cardElement = this._deleteButton.closest('.place');
        this._cardElement.remove();
    }
}
