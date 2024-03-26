const Router = require('express').Router
const userController = require('../controllers/user-controller')
const studMemberController = require('../controllers/stud_member-controller')
const newsItemController = require('../controllers/news_item-controller')
const router = new Router()
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/auth-middleware')
const authRoleMiddleware = require('../middlewares/auth_role-middleware')


// запросы для регистрации/авторизации и обновления токенов
router.post('/registration',
    body('email').isEmail(), 
    body('password').isLength({min: 3, max: 32}),
    userController.registration
)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUsers)


// запросы для работы со списком членов студсовета
router.post('/studboard',
    authMiddleware,
    authRoleMiddleware,
    studMemberController.addStudMember
)
router.delete('/studboard/:id', 
    authMiddleware,
    authRoleMiddleware,
    studMemberController.deleteStudMember
)
router.patch('/studboard/:id', 
    authMiddleware,
    authRoleMiddleware,
    studMemberController.editStudMember
)
router.get('/studboard', studMemberController.getStudMembers)

// запросы для работы со списком новостей
router.get('/news/:id', newsItemController.getNewsItem)
router.post('/news',
    authMiddleware,
    authRoleMiddleware,
    newsItemController.addNewsItem
)
router.delete('/news/:id', 
    authMiddleware,
    authRoleMiddleware,
    newsItemController.deleteNewsItem
)
router.patch('/news/:id', 
    authMiddleware,
    authRoleMiddleware,
    newsItemController.editNewsItem
)
router.get('/news', newsItemController.getAllNewsItems)

module.exports = router