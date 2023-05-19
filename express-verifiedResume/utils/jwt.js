const jwt = require('jsonwebtoken')
const createError = require('http-errors')

const jwtIssuer = "localhost"

//openssl ecparam -genkey -name prime256v1 -noout -out private.pem
//openssl ec -in private.pem -pubout -out public.pem

const privateKey = 
`-----BEGIN EC PRIVATE KEY-----
MHcCAQEEILEUV6hGT0vSYTNrsMJbSNWmuFvDf5pNvPQIRhk5SOqUoAoGCCqGSM49
AwEHoUQDQgAEpmrARr3Xtrg4ER1T1oArhTV4HdLSdWVWSvOpdPvCxYXn+ubY1Kf3
897RR8x+W7OWh7v/eL+DOATiV7TLiBsBbQ==
-----END EC PRIVATE KEY-----
`
const publicKey = 
`-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEpmrARr3Xtrg4ER1T1oArhTV4HdLS
dWVWSvOpdPvCxYXn+ubY1Kf3897RR8x+W7OWh7v/eL+DOATiV7TLiBsBbQ==
-----END PUBLIC KEY-----`
module.exports = {

    signAccessToken(payload){
        return new Promise((resolve, reject) => {
            jwt.sign( payload, privateKey, { algorithm: 'ES256' }, (err, token) => {
                if (err) {
                reject(createError.InternalServerError(err))
                }
                resolve(token)
            })
        })
    },
    verifyAccessToken(token){
        return new Promise((resolve, reject) => {
            jwt.verify(token, publicKey, { algorithms:['ES256'] }, (err, payload) => {
                if (err) {
                    const message = err.name == 'JsonWebTokenError' ? 'Unauthorized' : err.message
                    return reject(createError.Unauthorized(message))
                }
                resolve(payload)
            })
        })
    }

}
