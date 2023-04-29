import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._handleFormSubmit = handleFormSubmit;
        this._inputList = Array.from(this._form.querySelectorAll('.popup__data'));
    }
    close() {
        this._getInputValues();
        this._form.reset();
        return super.close();
    }
    setEventListeners() {
        this._form.addEventListener('submit', this._handleFormSubmit);
        return super.setEventListeners();
    }
    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach(input => {
            this._inputValues[input.name] = input.value;
            return this._inputValues;
        });
    }
}
