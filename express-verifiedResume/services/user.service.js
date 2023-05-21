const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const crypto = require('crypto')
const bcrypt = require('bcrypt')
const jwt = require('../utils/jwt')
const validator = require('../utils/validation')

const createError = require('http-errors')

const saltValue = parseInt(process.env.SALT_VALUE)

class authService {

    static async register(data) {
        const { email } = data

        if (!email) {
            throw createError.Unauthorized('Email is required')
        }
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (user) {
            throw createError.Unauthorized('User already exists')
        }

        if (data.password !== data.confirmPassword) {
            throw createError.Unauthorized('Password does not match')
        }
        validator.verifyEmail(email)
        validator.verifyPassword(data.password)

        data.password = bcrypt.hashSync(data.password, saltValue)
        data.uid = crypto.randomBytes(9).toString('hex')
        data.dob = new Date(data.dob)

        await prisma.user.create({
            data: {
                email: email,
                password: data.password,
                uid: data.uid,
            }
        })
        return
    }

    static async login(data) {
        const { email, password } = data
        if (!email && !password) {
            throw createError.Unauthorized('Email and password are required')
        }
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!user) {
            throw createError.NotFound('User not found')
        }

        const checkPassword = bcrypt.compareSync(password, user.password)
        if (!checkPassword) throw createError.Unauthorized('Email address or password not valid')


        const payload = {
            uid: user.uid
        }
        const accessToken = await jwt.signAccessToken(payload)

        return { accessToken }
    }

    static async getProfile(data) {
        const { uid } = data
        const user = await prisma.user.findUnique({
            where: {
                uid
            },
            select: {
                uid: true,
                email: true,
                name: true,
                password: true,
                avatar: true,
                cv: true,
                savedCVs: true,
                savedCompanies: true,
                educations: true,
                experiences: true,
                skills: true,
                company: true,
                employee: true,

            }
        })
        if (!user) throw createError.NotFound('User not found')
        return user
    }
    static async createCv(data) { 
        const { uid, firstName, lastName, about, email, phone, website, address } = data
        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })
        
        if (user.cv) throw createError.Unauthorized('User already has a CV')
        if (!firstName && !lastName && !about && !email) {
            throw createError.Unauthorized('firstName, lastName, about and email are required fields')
        }
        const cv = await prisma.cv.create({
            data: {
                user: {
                    connect: {
                        uid: uid
                    }
                }
            },
            where: {
                firstName: firstName,
                lastName: lastName,
                about: about,
                email: email,
                phone: phone != null ? phone : undefined,
                website: website != null ? website : undefined,
                address: address != null ? address : undefined
            }
        })
        return cv
    }

    static async editCv(data) {
        const { uid, firstName, lastName, about, email, phone, website, address } = data
        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })
        if (!user.cv) throw createError.Unauthorized('User does not have a CV')

        const cv = await prisma.cv.update({ 
            where: {
                id: user.cv.id
            },
            data: {
                firstName: firstName != null ? firstName : undefined,
                lastName: lastName != null ? lastName : undefined,
                about: about != null ? about : undefined,
                email: email != null ? email : undefined,
                phone: phone != null ? phone : undefined,
                website: website != null ? website : undefined,
                address: address != null ? address : undefined
            }
        })

        return cv
    }

    static async getCv(data) { 
        const { uid } = data
        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })
        if (!user.cv) throw createError.Unauthorized('User does not have a CV')
        const cv = await prisma.cv.findUnique({
            where: {
                id: user.cv.id
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                about: true,
                email: true,
                phone: true,
                website: true,
                address: true,
                educations: true,
                experiences: true,
                skills: true
            }
        })
        return cv
    }


    static async createEducation(data) {
        const { uid, institution, degree, startDate, endDate } = data
        if (!institution && !degree && !startDate) {
            throw createError.Unauthorized('institution, degree, startDate are required fields')
        }

        const institutionExists = await prisma.company.findUnique({
            where: {
                name: institution
            }
        })
        if (!institutionExists) throw createError.Unauthorized('This institution does not exist or is not registered')
            

        validator.verifyDate(startDate)
        if (endDate != null) {
            validator.verifyDate(endDate)
        }
        const education = await prisma.education.create({
            data: {
                user: {
                    connect: {
                        uid: uid
                    }
                }
            },
            where: {
                institution: institution,
                degree: degree,
                startDate: startDate,
                endDate: endDate != null ? endDate : undefined
            }
        })
        
        return education
    }

    static async addEducation(data) {
        const { uid, educationID } = data

        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })
        if (!user.cv) throw createError.Unauthorized('User does not have a CV')
        if (!educationID) throw createError.Unauthorized('educationID is a required field')
        const education = await prisma.education.findUnique({
            where: {
                id: educationID
            }
        })
        if (!education) throw createError.Unauthorized('This education ID does not exist')

        const cv = await prisma.cv.update({
            where: {
                id: user.cv.id
            },
            data: {
                education: {
                    connect: {
                        id: educationID
                    }
                }
            }
        })
        return cv
    }

    static async createExperience(data) { 
        const { uid, company, position, startDate, endDate } = data
        if (!company && !position && !startDate) {
            throw createError.Unauthorized('company, position, startDate are required fields')
        }

        validator.verifyDate(startDate)
        if (endDate != null) {
            validator.verifyDate(endDate)
        }
        const experience = await prisma.experience.create({
            data: {
                user: {
                    connect: {
                        uid: uid
                    }
                }
            },
            where: {
                company: company,
                position: position,
                startDate: startDate,
                endDate: endDate != null ? endDate : undefined
            }
        })

        return experience
    }

    static async addExperience(data) { 
        const { uid, experienceID } = data

        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })
        if (!user.cv) throw createError.Unauthorized('User does not have a CV')
        if (!experienceID) throw createError.Unauthorized('experienceID is a required field')
        const experience = await prisma.experience.findUnique({
            where: {
                id: experienceID
            }
        })
        if (!experience) throw createError.Unauthorized('This experience ID does not exist')

        const cv = await prisma.cv.update({
            where: {
                id: user.cv.id
            },
            data: {
                experience: {
                    connect: {
                        id: experienceID
                    }
                }
            }
        })
        return cv
    }

    static async createSkill(data) {
        const { uid, skillName, category } = data
        if (!skillName) {
            throw createError.Unauthorized('skillName is a required field')
        }
        const skill = await prisma.skill.create({
            data: {
                user: {
                    connect: {
                        uid: uid
                    }
                }
            },
            where: {
                skillName: skillName,
                category: category != null ? category : undefined
            }
        })
        return skill
    }

    static async addSkill(data) {
        const { uid, skillID } = data

        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })
        if (!user.cv) throw createError.Unauthorized('User does not have a CV')
        if (!skillID) throw createError.Unauthorized('skillID is a required field')
        const skill = await prisma.skill.findUnique({
            where: {
                id: skillID
            }
        })
        if (!skill) throw createError.Unauthorized('This skill ID does not exist')

        const cv = await prisma.cv.update({
            where: {
                id: user.cv.id
            },
            data: {
                skill: {
                    connect: {
                        id: skillID
                    }
                }
            }
        })
        return cv
    }

    static async createLanguage(data) {
        const { uid, languageName, native, listening, reading, writing, spokenProduction, spokenInteraction } = data
        if (!languageName) {
            throw createError.Unauthorized('languageName is a required field')
        }
        if (!native) {
            if (!listening && !reading && !writing && !spokenProduction && !spokenInteraction) {
                throw createError.Unauthorized('listening, reading, writing, spokenProduction, spokenInteraction are required fields')
            }
        }

        const language = await prisma.language.create({
            data: {
                user: {
                    connect: {
                        uid: uid
                    }
                }
            },
            where: {
                languageName: languageName,
                native: native != null ? native : undefined,
                listening: listening != null ? listening : undefined,
                reading: reading != null ? reading : undefined,
                writing: writing != null ? writing : undefined,
                spokenProduction: spokenProduction != null ? spokenProduction : undefined,
                spokenInteraction: spokenInteraction != null ? spokenInteraction : undefined
            }
        })

        return language
    }

    static async addLanguage(data) {
        const { uid, languageID } = data

        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })
        if (!user.cv) throw createError.Unauthorized('User does not have a CV')
        if (!languageID) throw createError.Unauthorized('languageID is a required field')
        const language = await prisma.language.findUnique({
            where: {
                id: languageID
            }
        })
        if (!language) throw createError.Unauthorized('This language ID does not exist')

        const cv = await prisma.cv.update({
            where: {
                id: user.cv.id
            },
            data: {
                language: {
                    connect: {
                        id: languageID
                    }
                }
            }
        })
        return cv
    }

    static async save (data) {
        const { uid, cvID, companyID } = data

        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })

        const cv = await prisma.cv.findUnique({
            where: {
                id: cvID
            }
        })

        const company = await prisma.company.findUnique({
            where: {
                id: companyID
            }
        })

        if (cv) {
            const saveCV = await prisma.savedCV.create({
                data: {
                    user: {
                        connect: {
                            uid: uid
                        }
                    }
                },
                where: {
                    cv: {
                        connect: {
                            id: cvID
                        }
                    }
                }
            })
            return saveCV
        }
        if (company) {
            const saveCompany = await prisma.savedCompany.create({
                data: {
                    user: {
                        connect: {
                            uid: uid
                        }
                    }
                },
                where: {
                    company: {
                        connect: {
                            id: companyID
                        }
                    }
                }
            })
            return saveCompany
        }

    }
        
    static async unsaved (data) {
        const { uid, cvID, companyID } = data

        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })

        const cv = await prisma.cv.findUnique({
            where: {
                id: cvID
            }
        })

        const company = await prisma.company.findUnique({
            where: {
                id: companyID
            }
         })

        if(!cv) throw createError.Unauthorized('This CV ID does not exist')

        if(!company) throw createError.Unauthorized('This company ID does not exist')

        if(cv) {
            const unsavedCV = await prisma.savedCV.delete({
                where: {
                    id: cvID
                }
            })
            return unsavedCV
        }
    }
    
    static async saved(data) {
        const { uid } = data


        const savedCV = await prisma.savedCV.findMany({
            where: {
                user: {
                    uid: uid
                }
            }
        })

        const savedCompany = await prisma.savedCompanies.findMany({
            where: {
                user: {
                    uid: uid
                }
            }
        })

        if (!savedCV && !savedCompany) throw createError.Unauthorized('User does not have any saved CVs or companies')

        const saved = {
            savedCV: savedCV,
            savedCompany: savedCompany
        }

        return saved
    }

    static async passwordChange(data) {
        const { uid, oldPassword, newPassword, confirmPassword } = data


        if (!oldPassword && !newPassword && !confirmPassword) {
            throw createError.Unauthorized('oldPassword, newPassword and confirmPassword are required fields')
        }

        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })

        const checkPassword = bcrypt.compareSync(oldPassword, user.password)
        if (!checkPassword) throw createError.Unauthorized('Password is not valid')

        validator.verifyPassword(newPassword)
        const hashedPassword = bcrypt.hashSync(newPassword, saltValue)

        await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                password: hashedPassword
            }
        })
        const success = 'Password, has been successfully changed!'
        return success
    }

}

module.exports = authService