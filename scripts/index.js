initialCards.forEach(renderInitialCard);
editButton.addEventListener('click', openProfilePopup);
closeProfileButton.addEventListener('click', closeProfilePopup);
addButton.addEventListener('click', openAddPopup);
closeAddPopupButton.addEventListener('click', closeAddPopup);
createCardButton.addEventListener('click', createNewCard);
closeImageButton.addEventListener('click', closeImagePopup);

popupBackgroundList.forEach(popupBackground => {
    popupBackground.addEventListener('click', evt => {
        closePopup(evt.target);
    });
});

document.addEventListener('keydown', evt => {
    const openedPopup = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        closePopup(openedPopup);
    }
});

function createCard(name, link, alt) {
    const placeCard = document.querySelector('#placeTemplate').content.cloneNode(true);
    const placeTitle = placeCard.querySelector('.place__title');
    const placeImage = placeCard.querySelector('.place__image');
    const likeButton = placeCard.querySelector('.place__button');
    placeTitle.textContent = name;
    placeImage.setAttribute('src', link);
    placeImage.setAttribute('alt', alt);
    likeButton.addEventListener('click', putLike);
    placeImage.addEventListener('click', openImagePopup);
    const deleteButton = placeCard.querySelector('.place__delete-button');
    deleteButton.addEventListener('click', deleteCard);
    return placeCard;
}

function renderInitialCard(card) {
    const initialCard = createCard(card.name, card.link, card.alt);
    places.append(initialCard);
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
}
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function openProfilePopup() {
    userNameInput.value = userName.textContent;
    userDescriptionInput.value = userDescription.textContent;
    openPopup(profilePopup);
}

function closeProfilePopup() {
    closePopup(profilePopup);
}

profileEditor.addEventListener('submit', saveProfileData);

function saveProfileData(evt) {
    evt.preventDefault();
    userName.textContent = userNameInput.value;
    userDescription.textContent = userDescriptionInput.value;
    closePopup(profilePopup);
}

function openAddPopup() {
    openPopup(addCardPopup);
}
function closeAddPopup() {
    closePopup(addCardPopup);
}

function createNewCard(evt) {
    evt.preventDefault();
    const newCard = createCard(placeNameInput.value, placeLinkInput.value, placeNameInput.value);
    places.prepend(newCard);
    closePopup(addCardPopup);
    cardCreator.reset();
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
    const popupImageContainer = popupImage.closest('.place');
    const popupTitle = popupImageContainer.querySelector('.place__title');
    openPopup(imagePopup);
    const fullImage = imagePopup.querySelector('.popup__image');
    fullImage.setAttribute('src', popupImage.getAttribute('src'));
    fullImage.setAttribute('alt', popupImage.getAttribute('alt'));
    const fullImageTitle = imagePopup.querySelector('.popup__place-name');
    fullImageTitle.textContent = popupTitle.textContent;
}

function closeImagePopup() {
    closePopup(imagePopup);
}
