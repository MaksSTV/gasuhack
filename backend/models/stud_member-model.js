const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const StudMember = sequelize.define('stud_member', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    image: {type: DataTypes.STRING, defaultValue: 'default_stud_member.jpg'},
    position: {type: DataTypes.STRING, defaultValue: ''},    // должность
    name: {type: DataTypes.STRING, defaultValue: ''},    // полное ФИО
    socialLink: {type: DataTypes.STRING, defaultValue: ''},    // ссылка на соцсеть
    areasOfResp: {type: DataTypes.ARRAY(DataTypes.JSONB), defaultValue: [{}]},   // список зон ответственности
    relatedTo: {type: DataTypes.ENUM('upper', 'department', 'faculty', 'project'), defaultValue: 'upper'},    // принадлежность к группе()
})

module.exports = StudMember;