const router = require('express').Router()
const library = require('../controllers/library.controller')
// const auth = require('../middlewares/auth')

router.post('/create', library.create)

router.post('/register_game', library.registerGame)

router.patch('/modify_game_score', library.modifyGameScore)

module.exports = router