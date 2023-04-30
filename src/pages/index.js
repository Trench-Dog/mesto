import './index.css';
import {
    initialCards,
    editButton,
    userNameInput,
    userDescriptionInput,
    addButton,
    profileForm,
    addCardForm,
    placeNameInput,
    placeLinkInput,
    formConfig
} from '../components/constants.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
const placesSection = new Section(
    {
        items: initialCards,
        renderer: card => {
            const cardElement = new Card(
                card.name,
                card.link,
                card.alt,
                '#placeTemplate',
                (name, link) => {
                    imagePopup.open(name, link);
                }
            );
            return cardElement.generateCard();
        }
    },
    '.places'
);
placesSection.renderInitialCards();
const profileValidator = new FormValidator(formConfig, profileForm);
profileValidator.enableValidation();
const cardValidator = new FormValidator(formConfig, addCardForm);
cardValidator.enableValidation();
const profileInfo = new UserInfo({
    nameSelector: '.profile__name',
    descriptionSelector: '.profile__description'
});
const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();
const profilePopup = new PopupWithForm('.popup_type_profile', profileFormSubmit);
function profileFormSubmit(inputValues) {
    profileInfo.setUserInfo({
        name: inputValues.name,
        description: inputValues.description
    });
}
profilePopup.setEventListeners();
const addCardPopup = new PopupWithForm('.popup_type_add-card', addCardFormSubmit);
function addCardFormSubmit(inputValues) {
    placesSection.renderItem(inputValues.place, inputValues.link);
}

addCardPopup.setEventListeners();
editButton.addEventListener('click', () => {
    profilePopup.open();
    const userData = profileInfo.getUserInfo();
    userNameInput.value = userData.nameValue;
    userDescriptionInput.value = userData.descriptionValue;
    profileValidator.resetValidation();
});
addButton.addEventListener('click', () => {
    addCardPopup.open();
    cardValidator.resetValidation();
});
