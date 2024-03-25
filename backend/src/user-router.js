const Router = require('../framework/router');

const router = new Router()

const users = [
    {id: 1, name: '4veg0s'},
    {id: 2, name: 'MaksSTV'}
]

router.get('/users', (req, res) => {
    res.writeHead(200, {
        'Content-type': 'application/json'
    })
    res.end(JSON.stringify(users))
})

router.post('/users', (req, res) => {
    res.writeHead(200, {
        'Content-type': 'application/json'
    })
    res.end(JSON.stringify(users))
})

module.exports = router