import Card from './Card.js';
import FormValidator from './FormValidator.js';
initialCards.forEach(card => {
    const cardElement = new Card(card.name, card.link, card.alt, '#placeTemplate');
    const newCard = cardElement.generateCard();
    places.append(newCard);
});
const profileValidator = new FormValidator(formConfig, 'popup-profile-form');
profileValidator.enableValidation();
const cardValidator = new FormValidator(formConfig, 'popup-add-form');
cardValidator.enableValidation();

editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', openAddPopup);
cardCreator.addEventListener('submit', createNewCard);
profileEditor.addEventListener('submit', saveProfileData);
popupList.forEach(popup => {
    popup.addEventListener('mousedown', evt => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        }
        if (evt.target.classList.contains('popup__close-button')) {
            closePopup(popup);
        }
    });
});

function manageClosingByEsc(evt) {
    const pushedKey = evt.key;
    if (pushedKey === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', manageClosingByEsc);
}

function closePopup(popup) {
    document.removeEventListener('keydown', manageClosingByEsc);
    popup.classList.remove('popup_opened');
}

function openProfilePopup() {
    userNameInput.value = userName.textContent;
    userDescriptionInput.value = userDescription.textContent;
    openPopup(profilePopup);
}

function saveProfileData(evt) {
    evt.preventDefault();
    userName.textContent = userNameInput.value;
    userDescription.textContent = userDescriptionInput.value;
    closePopup(profilePopup);
}

function openAddPopup() {
    openPopup(addCardPopup);
}

function createNewCard(evt) {
    evt.preventDefault();
    const cardElement = new Card(
        placeNameInput.value,
        placeLinkInput.value,
        placeNameInput.value,
        '#placeTemplate'
    );
    const newCard = cardElement.generateCard();
    places.prepend(newCard);
    closePopup(addCardPopup);
    cardCreator.reset();
    createCardButton.classList.add('popup__save-button_disabled');
    createCardButton.disabled = true;
}

export { openPopup };
