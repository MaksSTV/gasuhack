const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Token = sequelize.define('token', {
    email: {type: DataTypes.STRING, primaryKey: true, unique: true},
    refreshToken: {type: DataTypes.STRING},
})

module.exports = Token;