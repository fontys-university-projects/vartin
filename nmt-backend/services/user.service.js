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

    static async info(data) {
        const { uid } = data;

        const user = await prisma.user.findUnique({
            where: {
                uid
            },
            select: {
                uid: true,
                createdAt: true,
                firstName: true,
                lastName: true,
                avatar: true,
                about: true,
                email: true,
                emailVerified: true,
                role: true,
            }
        })

        if (!user) {
            throw createError.Unauthorized('User is not logged in!')
        }

        return user
    }

    static async uni(data) {
        const { uid } = data;

        const user = await prisma.user.findUnique({
            where: {
                uid,
            }
        })

        const key = await prisma.key.findUnique({
            where: {
                kid: user.activationKey
            },
            select: {
                uni: true,
                uniEmail: true
            }
        })
        if (!key) {
            throw createError.Unauthorized('This key does not exist!')
        }

        return key
    }

    static async getDiary(data) {
        const { uid } = data

        const user = await prisma.user.findUnique({
            where: {
                uid,
            }
        })

        if (user.role == 'Premium') {
            const diary = await prisma.diary.findMany({
                where: {
                    ownerId: user.id,
                },
                select: {
                    feeling: true,
                    createdAt: true
                },
                orderBy: [
                    {
                        createdAt: 'desc',
                    },
                ]
            })
            const emotionsAVG = await prisma.diary.aggregate({
                where: {
                    ownerId: user.id,
                },
                _avg: {
                    q1: true,
                    q2: true,
                    q3: true,
                    q4: true
                },
            })

            const emotions = { ...emotionsAVG._avg }

            return { diary, emotions }
        }
        else {
            var today = new Date()
            today.setHours(0, 0, 0, 0)
            var thirtyDays = new Date(new Date().setDate(today.getDate() - 30));
            return await prisma.diary.findMany({
                where: {
                    ownerId: user.id,
                    createdAt: {
                        gte: thirtyDays
                    }
                },
                select: {
                    feeling: true,
                    createdAt: true
                },
                orderBy: [
                    {
                        createdAt: 'desc',
                    },
                ]
            })
        }
    }

    static async postDiary(data) {
        const { uid, feeling, q1, q2, q3, q4 } = data

        const user = await prisma.user.findUnique({
            where: {
                uid,
            }
        })

        var today = new Date()
        var beginDay = today.setHours(0, 0, 0, 0)
        var endDay = today.setHours(24, 0, 0, 0)

        const diary = await prisma.diary.findMany({
            where: {
                ownerId: user.id,
                AND: [
                    {
                        createdAt: {
                            gte: new Date(beginDay),
                        }
                    },
                    {
                        createdAt: {
                            lt: new Date(endDay)
                        }
                    }
                ]
            },
        })

        if (feeling == undefined && diary.feeling != undefined) {
            feeling = diary.feeling
        }
        if (q1 == undefined && diary.q1 != undefined) {
            q1 = diary.q1
        }
        if (q2 == undefined && diary.q2 != undefined) {
            q2 = diary.q2
        }
        if (q3 == undefined && diary.q3 != undefined) {
            q3 = diary.q3
        }
        if (q4 == undefined && diary.q4 != undefined) {
            q4 = diary.q4
        }

        if (user.role == 'Premium') {
            if (diary.length == 0) {
                return await prisma.diary.create({
                    data: {
                        ...(feeling ? { feeling: parseInt(feeling) } : undefined),
                        ...(q1 ? { q1: parseInt(q1) } : undefined),
                        ...(q2 ? { q2: parseInt(q2) } : undefined),
                        ...(q3 ? { q3: parseInt(q3) } : undefined),
                        ...(q4 ? { q4: parseInt(q4) } : undefined),
                        owner: {
                            connect: {
                                id: user.id
                            }
                        }
                    }

                })
            }
            return await prisma.user.update({
                where: {
                    uid
                },
                data: {
                    diary: {
                        updateMany: {
                            where: {
                                AND: [
                                    {
                                        createdAt: {
                                            gte: new Date(beginDay),
                                        }
                                    },
                                    {
                                        createdAt: {
                                            lt: new Date(endDay)
                                        }
                                    }
                                ]
                            },
                            data: {
                                ...(feeling ? { feeling: parseInt(feeling) } : undefined),
                                ...(q1 ? { q1: parseInt(q1) } : undefined),
                                ...(q2 ? { q2: parseInt(q2) } : undefined),
                                ...(q3 ? { q3: parseInt(q3) } : undefined),
                                ...(q4 ? { q4: parseInt(q4) } : undefined),
                                createdAt: new Date()
                            }

                        }
                    }
                },
                select: {
                    diary: {
                        select: {
                            feeling: true,
                            q1: true,
                            q2: true,
                            q3: true,
                            q4: true
                        }
                    }
                }
            })
        }
        else {
            if (diary.length == 0) {
                return await prisma.diary.create({
                    data: {
                        feeling,
                        owner: {
                            connect: {
                                id: user.id
                            }
                        }
                    }

                })
            }
            return await prisma.user.update({
                where: {
                    uid
                },
                data: {
                    diary: {
                        updateMany: {
                            where: {
                                AND: [
                                    {
                                        createdAt: {
                                            gte: new Date(beginDay),
                                        }
                                    },
                                    {
                                        createdAt: {
                                            lt: new Date(endDay)
                                        }
                                    }
                                ]
                            },
                            data: {
                                feeling,
                                createdAt: new Date()
                            }

                        }
                    }
                },
                select: {
                    diary: {
                        select: {
                            feeling: true
                        }
                    }
                }
            })
        }
    }

    static async settings(data) {
        const { uid, firstName, lastName, dob, about } = data
        const user = await prisma.user.findUnique({
            where: {
                uid: uid
            }
        })

        if (dob !== null) {
            validator.verifyDate(dob)
        }

        const date = new Date(dob)
        await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                firstName,
                lastName,
                dob: date,
                about: about
            },
        })

        const profile = await prisma.user.findUnique({
            where: {
                uid
            },
            select: {
                uid: true,
                createdAt: true,
                email: true,
                emailVerified: true,
                role: true,
                firstName: true,
                lastName: true,
                dob: true,
                about: true,
            }
        })
        return profile
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