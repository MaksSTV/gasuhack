const newsItemService = require("../service/news_item-service");
const {validationResult} = require('express-validator')
const ApiError = require('../exceptions/api-error')

class NewsItemController {
    async getNewsItem(req, res, next) {
        try {
            // const errors = validationResult(req)
            // if (!errors.isEmpty()) {
            //     return next(ApiError.BadRequest('Ошибка валидации', errors.array()))
            // }
            const id = req.params.id
            const newsItemData = await newsItemService.findNewsItem(id)
            return res.json(newsItemData)
        } catch (e) {
            next(e);
        }
    }

    async addNewsItem(req, res, next) {
        try {
            // const errors = validationResult(req)
            // if (!errors.isEmpty()) {
            //     return next(ApiError.BadRequest('Ошибка валидации', errors.array()))
            // }
            const newsItem = req.body;
            const newsItemData = await newsItemService.addNewsItem(newsItem)
            return res.json(newsItemData)
        } catch (e) {
            next(e);
        }
    }

    async deleteNewsItem(req, res, next) {
        try {
            const id = req.params.id
            await newsItemService.removeNewsItem(id)
            res.status(200).json({ message: 'Новость успешно удалена' })
        } catch (e) {
            next(e);
        }
    }

    async editNewsItem(req, res, next) {
        try {
            // const errors = validationResult(req)
            // if (!errors.isEmpty()) {
            //     return next(ApiError.BadRequest('Ошибка валидации', errors.array()))
            // }
            const id = req.params.id;
            const updates = req.body;
            const newsItemData = await newsItemService.editNewsItem(id, updates)
            return res.json(newsItemData)
        } catch (e) {
            next(e);
        }
    }

    async getAllNewsItems(req, res, next) {
        try {
            const newsItem = await newsItemService.getAllNewsItems()
            return res.json(newsItem)
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new NewsItemController()