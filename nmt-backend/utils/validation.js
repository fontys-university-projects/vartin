const validator = require('validator')
const createError = require('http-errors')

const userPasswordSecurity = parseInt(process.env.USER_PASSWORD)
module.exports = {
    verifyEmail(email) {
        const verify = validator.isEmail(email)
        if(verify == false){
            return(createError.Unauthorized('Email is not valid'))
        }
        return(verify)
    },
    verifyDate(date) {
        const verify = validator.isDate(date, {format:'YYYY-MM-DD', strictMode:true})
        if(verify == false){
            return(createError.Unauthorized('Birthday format is not valid it must be YYYY-MM-DD (2020-10-23)'))
        }
        return(verify)
    },
    verifyPassword(password) {
        switch(userPasswordSecurity){
            case 1:
                const one = validator.isStrongPassword(password, {minLength: 8})
                if(one == false){
                    return(createError.Unauthorized('Password must be 8 characters long'))
                }
                return(one)
            case 2:
                const two = validator.isStrongPassword(password, {minLength: 8, minNumbers: 1 })
                if(two == false){
                    return(createError.Unauthorized('Password must be 8 characters long with 1 number and 1 letter'))
                }
                return(two)
            case 3:
                const three = validator.isStrongPassword(password, {minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1 })
                if(three == false){
                    return(createError.Unauthorized('Password must contain 8 characters, 1 number, 1 letter, 1 lowercase, 1 uppercase'))
                }
                return(three)
            case 4:
                const four = validator.isStrongPassword(password, {minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })
                if(four == false){
                    return(createError.Unauthorized('Password must contain 8 characters, 1 number, 1 letter, 1 lowercase, 1 uppercase, 1 symbol'))
                }
                return(four)
        }

    },
}