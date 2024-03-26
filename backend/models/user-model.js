const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    email: {type: DataTypes.STRING, primaryKey: true, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, defaultValue: '', allowNull: false},
    isActivated: {type: DataTypes.BOOLEAN, defaultValue: false},
    activationLink: {type: DataTypes.STRING, defaultValue: ''},
    role: {type: DataTypes.ENUM('admin', 'common'), defaultValue: 'common'}
})

module.exports = User;