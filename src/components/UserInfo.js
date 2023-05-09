export default class UserInfo {
    constructor({ nameSelector, descriptionSelector, avatarSelector }) {
        this._profileName = document.querySelector(nameSelector);
        this._profileDescription = document.querySelector(descriptionSelector);
        this._avatar = document.querySelector(avatarSelector);
    }
    getUserInfo() {
        let profileData = {
            nameValue: this._profileName.textContent,
            descriptionValue: this._profileDescription.textContent
        };
        return profileData;
    }
    setUserInfo({ name, description, link }) {
        this._profileName.textContent = name;
        this._profileDescription.textContent = description;
        this._avatar.src = link;
    }
}
