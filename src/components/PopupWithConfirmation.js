import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._confirmButton = this._popup.querySelector('.popup__save-button');
    }
    open(cardId, deleteCard) {
        this._cardId = cardId;
        this._deleteCard = deleteCard;
        super.open();
    }
    setEventListeners() {
        this._confirmButton.addEventListener('click', () => {
            this._deleteCard(this._cardId);
        });
        super.setEventListeners();
    }
}
