export default class UserInfo {
    constructor({ profileName, profileDescription }) {
        this._profileName = document.querySelector(profileName);
        this._profileDescription = document.querySelector(profileDescription);
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
