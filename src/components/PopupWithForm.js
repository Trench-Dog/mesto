import Popup from './Popup.js';
export default class PopupWithForm {
    constructor(popupSelector, formSubmit) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
    }
}
