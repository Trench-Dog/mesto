const profilePopup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
let profileEditor = document.querySelector('.popup__container');
let userNameInput = document.querySelector('.popup__data_type_name');
let userDescriptionInput = document.querySelector('.popup__data_type_description');
let userName = document.querySelector('.profile__name');
let userDescription = document.querySelector('.profile__description');

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

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
