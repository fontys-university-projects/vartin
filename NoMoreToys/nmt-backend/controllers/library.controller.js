const library = require('../services/library.service')
const createError = require('http-errors')
const e = require('express')

class libraryController {

    static create = async (req, res, next) => {

        try {
            const data = await library.create(req.body)
            res.status(200).json({
                status: true,
                message: 'User library created successfully',
                data
            })
        }
        catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static registerGame = async (req, res, next) => {

        try {
            const data = await library.registerGame(req.body)
            res.status(200).json({
                status: true,
                message: 'Game ragister successfully',
                data
            })
        }
        catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static modifyGameScore = async (req, res, next) => {

        try {
            const data = await library.modifyGameScore(req.body)
            res.status(200).json({
                status: true,
                message: 'Game score modified successfully',
                data
            })
        }
        catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

}

module.exports = libraryController