import './index.css';
import {
    initialCards,
    profilePopup,
    editButton,
    profileEditor,
    userNameInput,
    userDescriptionInput,
    userName,
    userDescription,
    addCardPopup,
    addButton,
    cardCreator,
    placeNameInput,
    placeLinkInput,
    popupList,
    formConfig
} from '../components/constants.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
const placesSection = new Section(
    {
        items: initialCards,
        renderer: card => {
            const cardElement = new Card(
                card.name,
                card.link,
                card.alt,
                '#placeTemplate',
                handleCardClick
            );
            const newCard = cardElement.generateCard();
            return newCard;
        }
    },
    '.places'
);
placesSection.renderInitialCards();
const profileValidator = new FormValidator(formConfig, 'popup-profile-form');
profileValidator.enableValidation();
const cardValidator = new FormValidator(formConfig, 'popup-add-form');
cardValidator.enableValidation();
const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();
// cardCreator.addEventListener('submit', evt => {
//     evt.preventDefault();
//     placesSection.addItem(placeNameInput.value, placeLinkInput.value);
//     closePopup(addCardPopup);
//     cardCreator.reset();
// });
// editButton.addEventListener('click', () => {
//     openProfilePopup();
//     profileValidator.resetValidation();
// });
// addButton.addEventListener('click', () => {
//     openAddPopup();
//     cardValidator.resetValidation();
// });
profileEditor.addEventListener('submit', saveProfileData);
// popupList.forEach(popup => {
//     popup.addEventListener('mousedown', evt => {
//         if (evt.target.classList.contains('popup_opened')) {
//             closePopup(popup);
//         }
//         if (evt.target.classList.contains('popup__close-button')) {
//             closePopup(popup);
//         }
//     });
// });

// function manageClosingByEsc(evt) {
//     const pushedKey = evt.key;
//     if (pushedKey === 'Escape') {
//         const openedPopup = document.querySelector('.popup_opened');
//         closePopup(openedPopup);
//     }
// }

// function openPopup(popup) {
//     popup.classList.add('popup_opened');
// }

// function closePopup(popup) {
//     popup.classList.remove('popup_opened');
// }

// function openProfilePopup() {
//     userNameInput.value = userName.textContent;
//     userDescriptionInput.value = userDescription.textContent;
//     openPopup(profilePopup);
// }

function saveProfileData(evt) {
    evt.preventDefault();
    userName.textContent = userNameInput.value;
    userDescription.textContent = userDescriptionInput.value;
    // closePopup(profilePopup);
}

// function openAddPopup() {
//     openPopup(addCardPopup);
// }

function handleCardClick(name, link) {
    imagePopup.open(name, link);
}
