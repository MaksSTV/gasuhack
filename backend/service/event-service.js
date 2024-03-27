const EventModel = require('../models//event-model')
const ApiError = require('../exceptions/api-error');

class EventService {
    async addEvent(freshEvent) {
        const existingEvent = await EventModel.findOne({where: {
            title: freshEvent.title, 
            startDate: freshEvent.startDate,

        }})
        if (existingEvent) {
            throw ApiError.BadRequest(`Полностью аналогичное мероприятие уже существует. Его id = ${existingEvent.id}`)
        }
        const event = await EventModel.create({
            title: freshEvent.title, 
            startDate: freshEvent.startDate,
            endDate: freshEvent.endDate,
        })
        return event
    }

    async removeEvent(id) {
        const event = await EventModel.destroy({where: {id: id}})
        return event
    }

    async findEvent(id) {
        const event = await EventModel.findOne({where: {id: id}})
        return event
    }

    async editEvent(id, updates) {
        const event = await EventModel.findOne({where: {id: id}})
        if (!event) {
            throw ApiError.BadRequest('Такое мероприятие не найдено')
        }

        const updatedEvent = await event.update(updates);

        return updatedEvent
    }

    async getAllEvents() {
        const event = await EventModel.findAll();
        return event
    }
}

module.exports = new EventService