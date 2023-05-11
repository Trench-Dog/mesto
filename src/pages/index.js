import './index.css';
import {
    profileImage,
    editButton,
    userNameInput,
    userDescriptionInput,
    addButton,
    profileForm,
    addCardForm,
    changeAvatarForm,
    formConfig
} from '../utils/constants.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Api from '../components/Api.js';
const profileValidator = new FormValidator(formConfig, profileForm);
profileValidator.enableValidation();
const cardValidator = new FormValidator(formConfig, addCardForm);
cardValidator.enableValidation();
const avatarValidator = new FormValidator(formConfig, changeAvatarForm);
avatarValidator.enableValidation();
const profileInfo = new UserInfo({
    nameSelector: '.profile__name',
    descriptionSelector: '.profile__description',
    avatarSelector: '.profile__avatar'
});
const placesSection = new Section((card, likes, isOwner) => {
    const cardElement = new Card(
        card.name,
        card.link,
        '#placeTemplate',
        (name, link) => {
            imagePopup.open(name, link);
        },
        (deleteButton, cardId) => {
            const deleteCard = api.deleteCard(cardId).catch(err => {
                console.log(`Ошибка: ${err}`);
            });
            confirmationPopup.open(deleteButton, deleteCard);
        },
        likes,
        isOwner,
        card._id,
        cardId => {
            api.putLike(cardId)
                .then(res => {
                    cardElement._likeCounter.textContent = res.likes.length;
                })
                .catch(err => {
                    console.log(`Ошибка: ${err}`);
                });
        },
        cardId => {
            api.deleteLike(cardId)
                .then(res => {
                    cardElement._likeCounter.textContent = res.likes.length;
                })
                .catch(err => {
                    console.log(`Ошибка: ${err}`);
                });
        }
    );

    return cardElement.generateCard();
}, '.places');
const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();
const profilePopup = new PopupWithForm('.popup_type_profile', profileFormSubmit);
function profileFormSubmit(inputValues) {
    api.editUserInfo(inputValues.name, inputValues.description)
        .then(editedData => {
            profileInfo.setUserInfo({
                name: editedData.name,
                description: editedData.about,
                link: editedData.avatar
            });
        })
        .catch(err => {
            console.log(`Ошибка: ${err}`);
        });
}
profilePopup.setEventListeners();
const addCardPopup = new PopupWithForm('.popup_type_add-card', addCardFormSubmit);
function addCardFormSubmit(inputValues) {
    api.sendNewCard(inputValues.place, inputValues.link)
        .then(cardData => {
            placesSection.renderItem(
                cardData.name,
                cardData.link,
                cardData.likes.length,
                true,
                cardData._id
            );
        })
        .catch(err => {
            console.log(`Ошибка: ${err}`);
        });
}
addCardPopup.setEventListeners();
const avatarPopup = new PopupWithForm('.popup_type_avatar', changeAvatarSubmit);
function changeAvatarSubmit(inputValues) {
    api.changeAvatar(inputValues.avatar).then(res => {
        profileImage.src = res.avatar;
    });
}
avatarPopup.setEventListeners();
profileImage.addEventListener('click', () => {
    avatarPopup.open();
});
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

const confirmationPopup = new PopupWithConfirmation('.popup_type_confirm');
confirmationPopup.setEventListeners();

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
    headers: {
        authorization: '23076075-9776-470a-ae27-dcd7a176dfd6',
        'Content-Type': 'application/json'
    }
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, cards]) => {
        profileInfo.setUserInfo({
            name: userData.name,
            description: userData.about,
            link: userData.avatar
        });
        placesSection.renderInitialCards(cards, userData._id);
    })
    .catch(err => {
        console.log(`Ошибка: ${err}`);
    });
