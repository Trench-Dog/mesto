import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._confirmButton = this._popup.querySelector('.popup__close-button_type_confirm');
    }
    open(deleteButton, deleteCard) {
        this._deleteButton = deleteButton;
        this._deleteCard = deleteCard;
        super.open();
    }
    setEventListeners() {
        this._confirmButton.addEventListener('click', () => {
            this._deleteCard();
        });
        super.setEventListeners();
    }
}
