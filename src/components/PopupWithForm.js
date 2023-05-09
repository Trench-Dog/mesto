import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._handleFormSubmit = handleFormSubmit;
        this._inputList = Array.from(this._form.querySelectorAll('.popup__data'));
        this._saveButton = this._form.querySelector('.popup__save-button');
        this._originalTextContent = this._saveButton.textContent;
    }
    close() {
        this._form.reset();
        super.close();
    }
    setEventListeners() {
        this._form.addEventListener('submit', evt => {
            evt.preventDefault();
            this.renderLoading(true);
            this._handleFormSubmit(this._getInputValues());
            this.close();
            this.renderLoading(false);
        });
        return super.setEventListeners();
    }
    _getInputValues() {
        const inputValues = {};
        this._inputList.forEach(input => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
    }
    renderLoading(isLoading) {
        if (isLoading) {
            this._saveButton.textContent = 'Сохранение...';
        } else {
            this._saveButton.textContent = this._originalTextContent;
        }
    }
}
