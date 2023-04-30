import {
    datsanImage,
    geysersImage,
    caveImage,
    pillarsImage,
    lakeImage,
    rockImage
} from '../utils/utils.js';
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
const editButton = document.querySelector('.profile__edit-button');
const userNameInput = document.querySelector('.popup__data_type_name');
const userDescriptionInput = document.querySelector('.popup__data_type_description');
const addButton = document.querySelector('.profile__add-button');
const profileForm = document.forms[0];
const addCardForm = document.forms[1];
const placeNameInput = document.querySelector('.popup__data_type_place');
const placeLinkInput = document.querySelector('.popup__data_type_link');
const formConfig = {
    inputSelector: '.popup__data',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    commonErrorSelector: '.popup__reminder',
    templateErrorClass: '.popup__reminder_type_',
    incorrectInputClass: 'popup__reminder_visible'
};
export {
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
};
