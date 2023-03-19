const initialCards = [
    {
        name: 'Иволгинский дацан',
        link: './images/place-ivolginskiy-datsan.jpg',
        alt: 'Фото Иволгинского дацана'
    },
    {
        name: 'Долина гейзеров',
        link: './images/place-dolina-geyzerov.jpg',
        alt: 'Фото Долины гейзеров'
    },
    {
        name: 'Кунгурская пещера',
        link: './images/place-kungurskaya-peshera.jpg',
        alt: 'Фото Кунгурской пещеры'
    },
    {
        name: 'Ленские столбы',
        link: './images/place-lenskie-stolby.jpg',
        alt: 'Фото Ленских столбов'
    },
    {
        name: 'Озеро Эльтон',
        link: './images/place-ozero-elton.jpg',
        alt: 'Фото озера Эльтон'
    },
    {
        name: 'Скала "Парус"',
        link: './images/place-skala-parus.jpg',
        alt: 'Фото скалы Парус'
    }
];

const profilePopup = document.querySelector('.popup_type_profile');
const editButton = document.querySelector('.profile__edit-button');
const closeProfileButton = document.querySelector('.popup__close-button_type_close-profile');
const profileEditor = profilePopup.querySelector('.popup__form');
const userNameInput = document.querySelector('.popup__data_type_name');
const userDescriptionInput = document.querySelector('.popup__data_type_description');
const userName = document.querySelector('.profile__name');
const userDescription = document.querySelector('.profile__description');
const addCardPopup = document.querySelector('.popup_type_add-card');
const addButton = document.querySelector('.profile__add-button');
const cardCreator = addCardPopup.querySelector('.popup__form');
const imagePopup = document.querySelector('.popup_type_image');
const fullImage = imagePopup.querySelector('.popup__image');
const fullImageTitle = imagePopup.querySelector('.popup__place-name');
const closeAddPopupButton = document.querySelector('.popup__close-button_type_close-add');
const createCardButton = addCardPopup.querySelector('.popup__save-button');
const closeImageButton = document.querySelector('.popup__close-button_type_close-image');
const places = document.querySelector('.places');
const placeNameInput = document.querySelector('.popup__data_type_place');
const placeLinkInput = document.querySelector('.popup__data_type_link');
const popupBackgroundList = Array.from(document.querySelectorAll('.popup'));
