initialCards.forEach(renderInitialCard);
editButton.addEventListener('click', openProfilePopup);
closeProfileButton.addEventListener('click', closeProfilePopup);
addButton.addEventListener('click', openAddPopup);
closeAddPopupButton.addEventListener('click', closeAddPopup);
cardCreator.addEventListener('submit', createNewCard);
closeImageButton.addEventListener('click', closeImagePopup);
profileEditor.addEventListener('submit', saveProfileData);
popupBackgroundList.forEach(popupBackground => {
    popupBackground.addEventListener('mousedown', evt => {
        closePopup(evt.target);
    });
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

function manageClosingByEsc(evt) {
    const pushedKey = evt.key;
    if (pushedKey === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', manageClosingByEsc);
}

function closePopup(popup) {
    document.removeEventListener('keydown', manageClosingByEsc);
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

function saveProfileData(evt) {
    evt.preventDefault();
    userName.textContent = userNameInput.value;
    userDescription.textContent = userDescriptionInput.value;
    closePopup(profilePopup);
}

function openAddPopup() {
    openPopup(addCardPopup);
    console.log(createCardButton);
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
    createCardButton.classList.add('popup__save-button_disabled');
}

function deleteCard(evt) {
    const usedButton = evt.target;
    const deletedCard = usedButton.closest('.place');
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
    fullImage.setAttribute('src', popupImage.getAttribute('src'));
    fullImage.setAttribute('alt', popupImage.getAttribute('alt'));
    fullImageTitle.textContent = popupTitle.textContent;
}

function closeImagePopup() {
    closePopup(imagePopup);
}
