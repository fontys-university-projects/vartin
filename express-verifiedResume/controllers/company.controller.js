const company = require('../services/company.service')
const createError = require('http-errors')
const e = require('express')

class companyController {
    static createCompany = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await company.createCompany(merge)
            res.status(200).json({
                status: true,
                message: "Company created successfully",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static registerEmployee = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await company.registerEmployee(merge)
            res.status(200).json({
                status: true,
                message: "Employee registered successfully",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static editEmployee = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await company.editEmployee(merge)
            res.status(200).json({
                status: true,
                message: "Employee edited successfully",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static createJob = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await company.createJob(merge)
            res.status(200).json({
                status: true,
                message: "Job created successfully",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static editJob = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await company.editJob(merge)
            res.status(200).json({
                status: true,
                message: "Job edited successfully",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static verify = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await company.verify(merge)
            res.status(200).json({
                status: true,
                message: "Experience/Education verified successfully",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static edit = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await company.edit(merge)
            res.status(200).json({
                status: true,
                message: "Experience/Education eddied successfully",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static remove = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await company.remove(merge)
            res.status(200).json({
                status: true,
                message: "Experience/Education removed successfully",
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
            const data = await company.saved(merge)
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
}

module.exports = companyController