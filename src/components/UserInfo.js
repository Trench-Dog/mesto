export default class UserInfo {
    constructor({ nameSelector, descriptionSelector }) {
        this._profileName = document.querySelector(nameSelector);
        this._profileDescription = document.querySelector(descriptionSelector);
    }
    getUserInfo() {
        let profileData = {
            nameValue: this._profileName.textContent,
            descriptionValue: this._profileDescription.textContent
        };
        return profileData;
    }
    setUserInfo({ name, description }) {
        this._profileName.textContent = name;
        this._profileDescription.textContent = description;
    }
}
