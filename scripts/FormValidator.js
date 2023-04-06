export default class FormValidator {
    constructor(config, formName) {
        this._form = document.getElementByName(formName)[0];
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._templateErrorClass = config.templateErrorClass;
        this._incorrectInputClass = config.incorrectInputClass;
        this._inputList = this._form.querySelectorAll(this._inputSelector);
    }
    _toggleButton(submitButton, inputSelector, inactiveButtonClass, form) {
        const formInputs = Array.from(form.querySelectorAll(inputSelector));
        const invalidInput = formInputs.some(input => {
            return !input.validity.valid;
        });
        if (invalidInput) {
            _blockSubmitButton(submitButton, inactiveButtonClass);
        } else {
            _unblockSubmitButton(submitButton, inactiveButtonClass);
        }
    }
    _showInputError(errorMessage, errorText, incorrectInputClass) {
        errorMessage.textContent = errorText;
        errorMessage.classList.add(incorrectInputClass);
    }
    _hideInputError(errorMessage, incorrectInputClass) {
        errorMessage.textContent = '';
        errorMessage.classList.remove(incorrectInputClass);
    }
    _blockSubmitButton(submitButton, inactiveButtonClass) {
        submitButton.classList.add(inactiveButtonClass);
        submitButton.disabled = true;
    }
    _unblockSubmitButton(submitButton, inactiveButtonClass) {
        submitButton.classList.remove(inactiveButtonClass);
        submitButton.disabled = false;
    }
    _checkValidity(input, templateErrorClass, incorrectInputClass) {
        const errorMessage = document.querySelector(`${templateErrorClass}${input.name}`);
        if (!input.validity.valid) {
            _showInputError(errorMessage, input.validationMessage, incorrectInputClass);
        } else {
            _hideInputError(errorMessage, incorrectInputClass);
        }
    }
    enableValidation() {
        this._inputList.forEach(input => {
            input.addEventListener('input', () => {
                const form = input.closest(this._formSelector);
                const submitButton = form.querySelector(this._submitButtonSelector);
                _checkValidity(input, templateErrorClass, incorrectInputClass);
                _toggleButton(submitButton, inputSelector, inactiveButtonClass, form);
            });
        });
    }
}
