module.exports = class UserDto {    // data transfer object
    email;
    // id;
    isActivated;

    constructor(model) {
        this.email = model.email;
        // this.id = model.id;     // fixme
        this.isActivated = model.isActivated;
    }
}