const datsanImage = new URL('../images/place-ivolginskiy-datsan.jpg', import.meta.url);
const geysersImage = new URL('../images/place-dolina-geyzerov.jpg', import.meta.url);
const caveImage = new URL('../images/place-kungurskaya-peshera.jpg', import.meta.url);
const pillarsImage = new URL('../images/place-lenskie-stolby.jpg', import.meta.url);
const lakeImage = new URL('../images/place-ozero-elton.jpg', import.meta.url);
const rockImage = new URL('../images/place-skala-parus.jpg', import.meta.url);
const initialCards = [
    {
        name: 'Иволгинский дацан',
        link: datsanImage,
        alt: 'Фото Иволгинского дацана'
    },
    {
        name: 'Долина гейзеров',
        link: geysersImage,
        alt: 'Фото Долины гейзеров'
    },
    {
        name: 'Кунгурская пещера',
        link: caveImage,
        alt: 'Фото Кунгурской пещеры'
    },
    {
        name: 'Ленские столбы',
        link: pillarsImage,
        alt: 'Фото Ленских столбов'
    },
    {
        name: 'Озеро Эльтон',
        link: lakeImage,
        alt: 'Фото озера Эльтон'
    },
    {
        name: 'Скала "Парус"',
        link: rockImage,
        alt: 'Фото скалы Парус'
    }
];

const profilePopup = document.querySelector('.popup_type_profile');
const editButton = document.querySelector('.profile__edit-button');
const profileEditor = profilePopup.querySelector('.popup__form');
const userNameInput = document.querySelector('.popup__data_type_name');
const userDescriptionInput = document.querySelector('.popup__data_type_description');
const userName = document.querySelector('.profile__name');
const userDescription = document.querySelector('.profile__description');
const addCardPopup = document.querySelector('.popup_type_add-card');
const addButton = document.querySelector('.profile__add-button');
const cardCreator = addCardPopup.querySelector('.popup__form');
const placeNameInput = document.querySelector('.popup__data_type_place');
const placeLinkInput = document.querySelector('.popup__data_type_link');
const popupList = Array.from(document.querySelectorAll('.popup'));
const formConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__data',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    commonErrorSelector: '.popup__reminder',
    templateErrorClass: '.popup__reminder_type_',
    incorrectInputClass: 'popup__reminder_visible'
};

export {
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
};
