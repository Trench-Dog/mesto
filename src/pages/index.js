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
const placesSection = new Section(card => {
    const cardElement = new Card(
        card.name,
        card.link,
        card.likes.length,
        '#placeTemplate',
        (name, link) => {
            imagePopup.open(name, link);
        },
        () => {
            confirmationPopup.open();
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
            placesSection.renderItem(cardData.name, cardData.link);
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

// placesSection.renderInitialCards();

// api.getInitialCards()
//     .then(cards => {
//         const placesSection = new Section(
//             {
//                 items: cards,
//                 renderer: card => {
//                     const cardElement = new Card(
//                         card.name,
//                         card.link,
//                         card.likes.length,
//                         '#placeTemplate',
//                         (name, link) => {
//                             imagePopup.open(name, link);
//                         },
//                         () => {
//                             confirmationPopup.open();
//                         }
//                     );
//                     return cardElement.generateCard();
//                 }
//             },
//             '.places'
//         );
//         placesSection.renderInitialCards();
//     })
//     .catch(err => {
//         console.log(`Ошибка: ${err}`);
//     });
// api.getUserInfo()
//     .then(data => {
//         profileInfo.setUserInfo({
//             name: data.name,
//             description: data.about,
//             link: data.avatar
//         });
//     })
//     .catch(err => {
//         console.log(`Ошибка: ${err}`);
//     });
Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, initialCards]) => {
        profileInfo.setUserInfo({
            name: userData.name,
            description: userData.about,
            link: userData.avatar
        });
        placesSection.renderInitialCards(initialCards);
    })
    .catch(err => {
        console.log(`Ошибка: ${err}`);
    });
