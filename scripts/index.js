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

const profilePopup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
let profileEditor = document.querySelector('.popup__form');
let userNameInput = document.querySelector('.popup__data_type_name');
let userDescriptionInput = document.querySelector('.popup__data_type_description');
let userName = document.querySelector('.profile__name');
let userDescription = document.querySelector('.profile__description');
const addCardPopup = document.querySelector('.popup-add');
const addButton = document.querySelector('.profile__add-button');
const imagePopup = document.querySelector('.picture-popup');
const closeAddPopupButton = document.querySelector('.popup-add__close-button');
const createCardButton = document.querySelector('.popup-add__create-button');
const closeImageButton = document.querySelector('.picture-popup__close-button');
const places = document.querySelector('.places');
let placeNameInput = document.querySelector('.popup-add__data_type_place');
let placeLinkInput = document.querySelector('.popup-add__data_type_link');

initialCards.forEach(createCard);

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
addButton.addEventListener('click', openAddPopup);
closeAddPopupButton.addEventListener('click', closeAddPopup);
createCardButton.addEventListener('click', createNewCard);
closeImageButton.addEventListener('click', closeImagePopup);

function createCard(card) {
    const placeCard = document.querySelector('#placeTemplate').content.cloneNode(true);
    const placeTitle = placeCard.querySelector('.place__title');
    const placeImage = placeCard.querySelector('.place__image');
    placeTitle.textContent = card.name;
    placeImage.setAttribute('src', card.link);
    placeImage.setAttribute('alt', card.alt);
    const likeButton = placeCard.querySelector('.place__button');
    likeButton.addEventListener('click', putLike);
    placeImage.addEventListener('click', openImagePopup);
    const deleteButton = placeCard.querySelector('.place__delete-button');
    deleteButton.addEventListener('click', deleteCard);
    places.append(placeCard);
}

function openPopup() {
    userNameInput.value = userName.textContent;
    userDescriptionInput.value = userDescription.textContent;
    profilePopup.classList.add('popup_opened');
}
function closePopup() {
    profilePopup.classList.remove('popup_opened');
}

profileEditor.addEventListener('submit', saveData);

function saveData(evt) {
    evt.preventDefault();
    userName.textContent = userNameInput.value;
    userDescription.textContent = userDescriptionInput.value;
    closePopup();
}

function openAddPopup() {
    addCardPopup.classList.add('popup-add_opened');
}
function closeAddPopup() {
    addCardPopup.classList.remove('popup-add_opened');
}

function createNewCard(evt) {
    evt.preventDefault();
    const newCard = document.querySelector('#placeTemplate').content.cloneNode(true);
    const newCardTitle = newCard.querySelector('.place__title');
    const newCardImage = newCard.querySelector('.place__image');
    newCardTitle.textContent = placeNameInput.value;
    newCardImage.setAttribute('src', placeLinkInput.value);
    newCardImage.addEventListener('click', openImagePopup);
    const likeButton = newCard.querySelector('.place__button');
    likeButton.addEventListener('click', putLike);
    const deleteButton = newCard.querySelector('.place__delete-button');
    deleteButton.addEventListener('click', deleteCard);
    places.prepend(newCard);
    closeAddPopup();
}

function deleteCard(evt) {
    const usedButton = evt.target;
    deletedCard = usedButton.closest('.place');
    deletedCard.remove();
}

function putLike(evt) {
    const button = evt.target;
    button.classList.toggle('place__button_active');
}

function openImagePopup(evt) {
    const popupImage = evt.target;
    imagePopup.classList.add('picture-popup_opened');
}

function closeImagePopup() {
    imagePopup.classList.remove('picture-popup_opened');
}
