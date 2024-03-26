const studMemberService = require("../service/stud_member-service");
const {validationResult} = require('express-validator')
const ApiError = require('../exceptions/api-error')

class StudMemberController {
    async addStudMember(req, res, next) {
        try {
            // const errors = validationResult(req)
            // if (!errors.isEmpty()) {
            //     return next(ApiError.BadRequest('Ошибка валидации', errors.array()))
            // }
            const studMember = req.body;
            const studMemberData = await studMemberService.addStudMember(studMember)
            return res.json(studMemberData)
        } catch (e) {
            next(e);
        }
    }

    async deleteStudMember(req, res, next) {
        try {
            const id = req.params.id
            await studMemberService.removeStudMember(id)
            res.status(200).json({ message: 'Член студенческого совета успешно удален' })
        } catch (e) {
            next(e);
        }
    }

    async editStudMember(req, res, next) {
        try {
            // const errors = validationResult(req)
            // if (!errors.isEmpty()) {
            //     return next(ApiError.BadRequest('Ошибка валидации', errors.array()))
            // }
            const id = req.params.id;
            const updates = req.body;
            const studMemberData = await studMemberService.editStudMember(id, updates)
            return res.json(studMemberData)
        } catch (e) {
            next(e);
        }
    }

    async getStudMembers(req, res, next) {
        try {
            const studMembers = await studMemberService.getAllStudMembers()
            return res.json(studMembers)
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new StudMemberController()