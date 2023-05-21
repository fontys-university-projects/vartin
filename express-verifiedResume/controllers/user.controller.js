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
            // next(createError(e.statusCode, e.message))
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

    static getProfile = async (req, res, next) => {
            
            try {
                const data = await user.getProfile(req.user)
                res.status(200).json({
                    status: true,
                    message: "Profile retrieved",
                    data
                })
            } catch (e) {
                next(createError(e.statusCode, e.message))
                console.log(e)
            }
    }

    static createCV = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.createCV(merge)
            res.status(200).json({
                status: true,
                message: "CV Created",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }
    static editCV = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.editCV(merge)
            res.status(200).json({
                status: true,
                message: "CV Edited",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static getCV = async (req, res, next) => {
                
                try {
                    const data = await user.getCV(req.user)
                    res.status(200).json({
                        status: true,
                        message: "CV retrieved",
                        data
                    })
                } catch (e) {
                    next(createError(e.statusCode, e.message))
                    console.log(e)
                }
    }

    static createExperience = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.createExperience(merge)
            res.status(200).json({
                status: true,
                message: "Experience Created",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static deleteExperience = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.deleteExperience(merge)
            res.status(200).json({
                status: true,
                message: "Experience Deleted",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static editExperience = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.editExperience(merge)
            res.status(200).json({
                status: true,
                message: "Experience Edited",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static addExperience = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.addExperience(merge)
            res.status(200).json({
                status: true,
                message: "Experience Added",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static removeExperience = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.removeExperience(merge)
            res.status(200).json({
                status: true,
                message: "Experience Removed",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static createEducation = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.createEducation(merge)
            res.status(200).json({
                status: true,
                message: "Education Created",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static editEducation = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.editEducation(merge)
            res.status(200).json({
                status: true,
                message: "Education Edited",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static deleteEducation = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.deleteEducation(merge)
            res.status(200).json({
                status: true,
                message: "Education Deleted",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static addEducation = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.addEducation(merge)
            res.status(200).json({
                status: true,
                message: "Education Added",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static removeEducation = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.removeEducation(merge)
            res.status(200).json({
                status: true,
                message: "Education Removed",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static createSkill = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.createSkill(merge)
            res.status(200).json({
                status: true,
                message: "Skill Created",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static removeSkill = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.removeSkill(merge)
            res.status(200).json({
                status: true,
                message: "Skill Removed",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static createLanguage = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.createLanguage(merge)
            res.status(200).json({
                status: true,
                message: "Language Created",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static removeLanguage = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.removeLanguage(merge)
            res.status(200).json({
                status: true,
                message: "Language Removed",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static save = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.save(merge)
            res.status(200).json({
                status: true,
                message: "Saved CV and/or Company",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static unsaved = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.unsave(merge)
            res.status(200).json({
                status: true,
                message: "Unsaved CV and/or Company",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static saved = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await user.unsave(merge)
            res.status(200).json({
                status: true,
                message: "List of all CVs and Companies",
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
                message: "Password Changed",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

}

module.exports = userController