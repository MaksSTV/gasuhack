module.exports = class UserDto {    // data transfer object
    email;
    isActivated;
    role;

    constructor(model) {
        this.email = model.email;
        this.isActivated = model.isActivated;
        this.role = model.role;
    }
}