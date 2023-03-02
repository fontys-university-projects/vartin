const router = require('express').Router()
const user = require('../controllers/user.controller')
const auth = require('../middlewares/auth')

router.post('/register', user.register)

router.post('/login', user.login)

router.get('/info', auth, user.info)

router.get('/uni', auth, user.uni)

router.get('/diary', auth, user.getDiary)

router.post('/diary', auth, user.postDiary)

router.post('/settings', auth, user.settings)

router.post('/changePassword', auth, user.passwordChange)

module.exports = router