const eventService = require("../service/event-service");
const {validationResult} = require('express-validator')
const ApiError = require('../exceptions/api-error')

class EventController {
    async getEvent(req, res, next) {
        try {
            // const errors = validationResult(req)
            // if (!errors.isEmpty()) {
            //     return next(ApiError.BadRequest('Ошибка валидации', errors.array()))
            // }
            const id = req.params.id
            const eventData = await eventService.findEvent(id)
            return res.json(eventData)
        } catch (e) {
            next(e);
        }
    }

    async addEvent(req, res, next) {
        try {
            // const errors = validationResult(req)
            // if (!errors.isEmpty()) {
            //     return next(ApiError.BadRequest('Ошибка валидации', errors.array()))
            // }
            const event = req.body;
            const eventData = await eventService.addEvent(event)
            return res.json(eventData)
        } catch (e) {
            next(e);
        }
    }

    async deleteEvent(req, res, next) {
        try {
            const id = req.params.id
            await eventService.removeEvent(id)
            res.status(200).json({ message: 'Мероприятие успешно удалено' })
        } catch (e) {
            next(e);
        }
    }

    async editEvent(req, res, next) {
        try {
            // const errors = validationResult(req)
            // if (!errors.isEmpty()) {
            //     return next(ApiError.BadRequest('Ошибка валидации', errors.array()))
            // }
            const id = req.params.id;
            const updates = req.body;
            const eventData = await eventService.editEvent(id, updates)
            return res.json(eventData)
        } catch (e) {
            next(e);
        }
    }

    async getAllEvents(req, res, next) {
        try {
            const event = await eventService.getAllEvents()
            return res.json(event)
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new EventController()