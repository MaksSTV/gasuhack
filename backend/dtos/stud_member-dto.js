module.exports = class StudMemberDto {    // data transfer object
    image;
    position;
    name;
    socialLink;
    areasOfResp;
    relatedTo;

    constructor(model, areasOfResp) {
        this.image = model.image;
        this.position = model.position;
        this.name = model.name;
        this.socialLink = model.socialLink;
        this.areasOfResp = areasOfResp;
        this.relatedTo = model.relatedTo;
    }
}