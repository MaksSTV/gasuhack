const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_ADMIN,
    process.env.DB_ADMIN_PASSWORD,
    {
        host: process.env.HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres'
    }
)