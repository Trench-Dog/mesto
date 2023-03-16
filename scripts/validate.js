function showInputError(errorMessage, errorText) {
    errorMessage.textContent = errorText;
}

function hideInputError(errorMessage) {
    errorMessage.textContent = '';
}

function checkValidity(input, templateErrorClass) {
    const errorMessage = document.querySelector(`${templateErrorClass}${input.name}`);
    if (!input.validity.valid) {
        showInputError(errorMessage, input.validationMessage);
    } else {
        hideInputError(errorMessage);
    }
}

function manageValidationEventListeners(inputList, templateErrorClass) {
    inputList.forEach(input => {
        input.addEventListener('input', () => {
            checkValidity(input, templateErrorClass);
        });
    });
}

function enableValidation(config) {
    const formList = document.querySelectorAll(config.formSelector);
    const inputList = document.querySelectorAll(config.inputSelector);
    manageValidationEventListeners(inputList, config.templateErrorClass);
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__data',
    templateErrorClass: '.popup__reminder_type_'
});
