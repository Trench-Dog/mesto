export default class FormValidator {
    constructor(config, formName) {
        this._form = document.getElementsByName(formName)[0];
        this._submitButton = this._form.querySelector(config.submitButtonSelector);
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._templateErrorClass = config.templateErrorClass;
        this._incorrectInputClass = config.incorrectInputClass;
        this._inputList = this._form.querySelectorAll(this._inputSelector);
    }
    _toggleButton() {
        const formInputs = Array.from(this._inputList);
        const invalidInput = formInputs.some(input => {
            return !input.validity.valid;
        });
        if (invalidInput) {
            this._blockSubmitButton();
        } else {
            this._unblockSubmitButton();
        }
    }
    _showInputError(errorMessage, errorText) {
        errorMessage.textContent = errorText;
        errorMessage.classList.add(this._incorrectInputClass);
    }
    _hideInputError(errorMessage) {
        errorMessage.textContent = '';
        errorMessage.classList.remove(this._incorrectInputClass);
    }
    _blockSubmitButton() {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
    }
    _unblockSubmitButton() {
        this._submitButton.classList.remove(this._inactiveButtonClass);
        this._submitButton.disabled = false;
    }
    _checkValidity(input) {
        const errorMessage = this._form.querySelector(`${this._templateErrorClass}${input.name}`);
        if (!input.validity.valid) {
            this._showInputError(errorMessage, input.validationMessage);
        } else {
            this._hideInputError(errorMessage);
        }
    }
    enableValidation() {
        this._inputList.forEach(input => {
            input.addEventListener('input', () => {
                this._checkValidity(input);
                this._toggleButton();
            });
        });
    }
}
