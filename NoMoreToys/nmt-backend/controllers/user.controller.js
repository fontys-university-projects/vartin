const user = require('../services/user.service')
const createError = require('http-errors')
const e = require('express')

class userController {

    static register = async (req, res, next) => {

        try {
            const data = await user.register(req.body)
            res.status(200).json({
                status: true,
                message: 'User created successfully',
                data
            })
        }
        catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static login = async (req, res, next) => {

        try {
            const data = await user.login(req.body)
            res.status(200).json({
                status: true,
                message: "Account login successful",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static info = async (req, res, next) => {
        try {
            const data = await user.info(req.user)
            res.status(200).json({
                status: true,
                message: "User Status",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static uni = async (req, res, next) => {
        try {
            const data = await user.uni(req.user)
            res.status(200).json({
                status: true,
                message: "Key Info",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static getDiary = async (req, res, next) => {
        try {
            const data = await user.getDiary(req.user)
            res.status(200).json({
                status: true,
                message: "User Diary",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static postDiary = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.postDiary(merge)
            res.status(200).json({
                status: true,
                message: "User Diary",
                data
            })
        } catch (e) {
            // next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }


    static settings = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.settings(merge)
            res.status(200).json({
                status: true,
                message: "User Settings",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static passwordChange = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.passwordChange(merge)
            res.status(200).json({
                status: true,
                message: "User Settings",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

}

module.exports = userController