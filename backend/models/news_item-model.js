const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const NewsItem = sequelize.define('news_item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    image: {type: DataTypes.STRING, defaultValue: 'default_news.jpg'},
    title: {type: DataTypes.STRING, defaultValue: '', allowNull: false},
    description: {type: DataTypes.TEXT, defaultValue: ''},
    date: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW}
})

module.exports = NewsItem;