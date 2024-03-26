const NewsItemModel = require('../models/news_item-model')
const ApiError = require('../exceptions/api-error');

class NewsItemService {
    async addNewsItem(freshNewsItem) {
        const existingNewsItem = await NewsItemModel.findOne({where: {
            image: freshNewsItem.image, 
            title: freshNewsItem.title, 
            description: freshNewsItem.description
        }})
        if (existingNewsItem) {
            throw ApiError.BadRequest(`Полностью аналогичная новость уже существует. Ее id = ${existingNewsItem.id}`)
        }
        console.log(freshNewsItem);
        const newsItem = await NewsItemModel.create({
            image: freshNewsItem.image, 
            title: freshNewsItem.title, 
            description: freshNewsItem.description, 
            date: freshNewsItem.date,
        })
        return newsItem
    }

    async removeNewsItem(id) {
        const newsItem = await NewsItemModel.destroy({where: {id: id}})
        return newsItem
    }

    async findNewsItem(id) {
        const newsItem = await NewsItemModel.findOne({where: {id: id}})
        return newsItem
    }

    async editNewsItem(id, updates) {
        const newsItem = await NewsItemModel.findOne({where: {id: id}})
        if (!newsItem) {
            throw ApiError.BadRequest('Такая новость не найдена')
        }

        const updatedNewsItem = await newsItem.update(updates);

        return updatedNewsItem
    }

    async getAllNewsItems() {
        const newsItems = await NewsItemModel.findAll();
        return newsItems
    }
}

module.exports = new NewsItemService