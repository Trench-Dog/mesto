function showInputError(errorMessage, errorText, incorrectInputClass) {
    errorMessage.textContent = errorText;
    errorMessage.classList.add(incorrectInputClass);
}

function hideInputError(errorMessage, incorrectInputClass) {
    errorMessage.textContent = '';
    errorMessage.classList.remove(incorrectInputClass);
}

function blockSubmitButton(input, formSelector, submitButtonSelector, inactiveButtonClass) {
    const form = input.closest(formSelector);
    submitButton = form.querySelector(submitButtonSelector);
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
}

function unblockSubmitButton(input, formSelector, submitButtonSelector, inactiveButtonClass) {
    const form = input.closest(formSelector);
    submitButton = form.querySelector(submitButtonSelector);
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
}

function checkValidity(
    input,
    templateErrorClass,
    incorrectInputClass,
    formSelector,
    submitButtonSelector,
    inactiveButtonClass
) {
    const errorMessage = document.querySelector(`${templateErrorClass}${input.name}`);
    if (!input.validity.valid) {
        showInputError(errorMessage, input.validationMessage, incorrectInputClass);
        blockSubmitButton(input, formSelector, submitButtonSelector, inactiveButtonClass);
    } else {
        hideInputError(errorMessage, incorrectInputClass);
        unblockSubmitButton(input, formSelector, submitButtonSelector, inactiveButtonClass);
    }
}

function manageValidationEventListeners(
    inputList,
    templateErrorClass,
    incorrectInputClass,
    formSelector,
    submitButtonSelector,
    inactiveButtonClass
) {
    inputList.forEach(input => {
        input.addEventListener('input', () => {
            checkValidity(
                input,
                templateErrorClass,
                incorrectInputClass,
                formSelector,
                submitButtonSelector,
                inactiveButtonClass
            );
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
        config.inactiveButtonClass
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
