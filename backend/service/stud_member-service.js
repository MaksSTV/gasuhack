const StudMemberModel = require('../models/stud_member-model')
const ApiError = require('../exceptions/api-error');

class StudMemberService {
    async addStudMember(newCandidate) {
        
        const candidate = await StudMemberModel.findOne({where: {name: newCandidate.name}})
        if (candidate) {
            throw ApiError.BadRequest(`Член студсовета ${newCandidate.name} уже существует`)
        }

        const studMember = await StudMemberModel.create({
            image: newCandidate.image, 
            position: newCandidate.position, 
            name: newCandidate.name, 
            socialLink: newCandidate.socialLink, 
            areasOfResp: newCandidate.areasOfResp, 
            relatedTo: newCandidate.relatedTo, 
        })
        return studMember
    }

    async removeStudMember(id) {
        const studMember = await StudMemberModel.destroy({where: {id: id}})
        return studMember
    }

    async findStudMember(id) {
        const studMember = await StudMemberModel.findOne({where: {id: id}})
        return studMember
    }

    async editStudMember(id, updates) {
        const studMember = await StudMemberModel.findOne({where: {id: id}})
        if (!studMember) {
            throw ApiError.BadRequest('Такой член студсовета не найден')
        }

        const updatedStudMember = await studMember.update(updates);

        return updatedStudMember
    }

    async getAllStudMembers() {
        const studMembers = await StudMemberModel.findAll();
        return studMembers
    }
}

module.exports = new StudMemberService