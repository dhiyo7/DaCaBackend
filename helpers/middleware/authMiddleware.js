const BaseResponse = require('../response/response')
const jwt = require('jsonwebtoken')

module.exports = {
    checkLogin: async (req, res, next) => {
        const bearerToken = req.header("x-access-token")
        try {
            if (!bearerToken) {
                BaseResponse.unauthorized(res, "Please Login First")
            } else {
                const token = await bearerToken.split(" ")[1]
                const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN)
                req.decodedToken = decodedToken
                next()
            }
        } catch (e) {
            BaseResponse.forbidden(res, e)
        }
    }
}