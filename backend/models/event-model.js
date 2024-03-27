const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Event = sequelize.define('event', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    title: {type: DataTypes.STRING, defaultValue: '', allowNull: false},
    startDate: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW},
    endDate: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW},
})

module.exports = Event;