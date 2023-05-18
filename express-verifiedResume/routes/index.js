const express = require('express')
const router = express.Router()
const user = require('./user')
const createError = require('http-errors')

router.use('/user', user)

router.use( async (req, res, next) => {
    next(createError.NotFound('Route not Found'))
})

router.use( (err, req, res, next) => {
    res.status(err.status || 500).json({
        status: false,
        message: err.message
    })
})

module.exports = router
