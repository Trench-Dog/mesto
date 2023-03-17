function showInputError(errorMessage, errorText, incorrectInputClass) {
    errorMessage.textContent = errorText;
    errorMessage.classList.add(incorrectInputClass);
}

function hideInputError(errorMessage, incorrectInputClass) {
    errorMessage.textContent = '';
    errorMessage.classList.remove(incorrectInputClass);
}

function blockSubmitButton(submitButton, inactiveButtonClass) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
}

function unblockSubmitButton(submitButton, inactiveButtonClass) {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
}

function checkValidity(input, templateErrorClass, incorrectInputClass) {
    const errorMessage = document.querySelector(`${templateErrorClass}${input.name}`);
    if (!input.validity.valid) {
        showInputError(errorMessage, input.validationMessage, incorrectInputClass);
    } else {
        hideInputError(errorMessage, incorrectInputClass);
    }
}

function toggleButton(submitButton, inputSelector, inactiveButtonClass, form) {
    const formInputs = Array.from(form.querySelectorAll(inputSelector));
    const invalidInput = formInputs.some(input => {
        return !input.validity.valid;
    });
    if (invalidInput) {
        blockSubmitButton(submitButton, inactiveButtonClass);
    } else {
        unblockSubmitButton(submitButton, inactiveButtonClass);
    }
}

function manageValidationEventListeners(
    inputList,
    templateErrorClass,
    incorrectInputClass,
    formSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputSelector
) {
    inputList.forEach(input => {
        input.addEventListener('input', () => {
            const form = input.closest(formSelector);
            const submitButton = form.querySelector(submitButtonSelector);
            checkValidity(input, templateErrorClass, incorrectInputClass);
            toggleButton(submitButton, inputSelector, inactiveButtonClass, form);
        });
    });
}

function enableValidation(config) {
    const inputList = document.querySelectorAll(config.inputSelector);
    manageValidationEventListeners(
        inputList,
        config.templateErrorClass,
        config.incorrectInputClass,
        config.formSelector,
        config.submitButtonSelector,
        config.inactiveButtonClass,
        config.inputSelector
    );
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__data',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    templateErrorClass: '.popup__reminder_type_',
    incorrectInputClass: 'popup__reminder_visible'
});
