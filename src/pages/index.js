import './index.css';
import {
    initialCards,
    editButton,
    userNameInput,
    userDescriptionInput,
    addButton,
    placeNameInput,
    placeLinkInput,
    formConfig
} from '../components/constants.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PicturePopup.js';
import PopupWithForm from '../components/PopupWithForm.js';
const placesSection = new Section(
    {
        items: initialCards,
        renderer: renderCard
    },
    '.places'
);
function renderCard(card) {
    const cardElement = new Card(card.name, card.link, card.alt, '#placeTemplate', () => {
        imagePopup.open(card.name, card.link);
    });
    const newCard = cardElement.generateCard();
    return newCard;
}
placesSection.renderInitialCards();
const profileValidator = new FormValidator(formConfig, 'popup-profile-form');
profileValidator.enableValidation();
const cardValidator = new FormValidator(formConfig, 'popup-add-form');
cardValidator.enableValidation();
const profileInfo = new UserInfo({
    profileName: '.profile__name',
    profileDescription: '.profile__description'
});
const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();
const profilePopup = new PopupWithForm('.popup_type_profile', profileFormSubmit);
function profileFormSubmit(evt) {
    evt.preventDefault();
    profileInfo.setUserInfo({
        name: userNameInput.value,
        description: userDescriptionInput.value
    });
    profilePopup.close();
}
profilePopup.setEventListeners();
const addCardPopup = new PopupWithForm('.popup_type_add-card', addCardFormSubmit);
function addCardFormSubmit(evt) {
    evt.preventDefault();
    placesSection.addItem(placeNameInput.value, placeLinkInput.value);
    addCardPopup.close();
}

addCardPopup.setEventListeners();
editButton.addEventListener('click', () => {
    profilePopup.open();
    userNameInput.value = profileInfo.getUserInfo().nameValue;
    userDescriptionInput.value = profileInfo.getUserInfo().descriptionValue;
    profileValidator.resetValidation();
});
addButton.addEventListener('click', () => {
    addCardPopup.open();
    cardValidator.resetValidation();
});
