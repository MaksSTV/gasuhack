const jwt = require('jsonwebtoken');
const userService = require('../service/user-service');
const tokenService = require('../service/token-service')
const ApiError = require('../exceptions/api-error');

module.exports = async function authRoleMiddleware(req, res, next) {
    try {
        const user = req.user
        // Проверка роли пользователя
        if (user.role !== 'admin') { 
            return next(ApiError.Forbidden());
        }

        // Если все проверки пройдены, переходим к следующему middleware
        next();
    } catch (e) {
        return next(ApiError.UnauthorizedError());
    }
};