const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// const crypto = require('crypto')
// const bcrypt = require('bcrypt')
// const jwt = require('../utils/jwt')
// const validator = require('../utils/validation')
// const saltValue = parseInt(process.env.SALT_VALUE)

const createError = require('http-errors')

class libraryService {

    static async create(data) {
        // userId, 
        const { userId } = data

        if (!userId) {
            throw createError.Unauthorized('UserID is required')
        }
        const user = await prisma.user.findUnique({
            where: {
                uid: userId
            }
        })
        if (!user) {
            throw createError.Unauthorized('User does not exists')
        }

        await prisma.library.create({
            data: {
                userId: user.id
            }
        })
        return
    }

    static async registerGame(data) {
        const { userId, gameName } = data

        if (!userId) {
            throw createError.Unauthorized('UserID is required')
        }
        const user = await prisma.user.findUnique({
            where: {
                uid: userId
            }
        })
        if (!user) {
            throw createError.Unauthorized('User does not exists')
        }

        if (!gameName) {
            throw createError.Unauthorized('GameID is required')
        }
        const game = await prisma.game.findUnique({
            where: {
                name: gameName
            }
        })
        if (!game) {
            throw createError.Unauthorized('Game does not exists')
        }

        // create new game stats 
        // only if there not game stats in the library for this game

        const gameStats = await prisma.library.findUnique({
            where: {
                userId: user.id,
                games: {
                    gid: game.id
                }
            }
        })
        if (!gameStats) {
            return
        }

        await prisma.library.create({
            where: {
                userId: user.id
            },
            data: {
                gameStatsId: game.id
            }
        })
    }

    static async modifyGameScore(data) {
        const { userId, gameName } = data

        if (!userId) {
            throw createError.Unauthorized('UserID is required')
        }
        const user = await prisma.user.findUnique({
            where: {
                uid: userId
            }
        })
        if (!user) {
            throw createError.Unauthorized('User does not exists')
        }

        if (!gameId) {
            throw createError.Unauthorized('GameID is required')
        }
        const game = await prisma.game.findUnique({
            where: {
                userId: user.id
            }
        })
        if (!game) {
            throw createError.Unauthorized('Game does not exists')
        }

        await prisma.game.update({
            where: {
                userId: user.id
            },
            data: {
                gid: game.id
            }
        })
    }
}

module.exports = libraryService