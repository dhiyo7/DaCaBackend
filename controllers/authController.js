const {sellers, customers, Sequelize} = require("../models")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const BaseResponse = require("../helpers/response/response")

module.exports = {
    signupSeller: async (req, res, next) => {
        const {body} = req
        try {
            const saltRounds = 10
            body.password = bcrypt.hashSync(body.password, saltRounds)
            const createData = {
                ...body,
            }
            sellers
                .create(createData)
                .then((data) => {
                    BaseResponse.success(res, createData)
                })
                .catch((error) => {
                    delete createData.password
                    return BaseResponse.error(res, error)
                })
        } catch (e) {
            return BaseResponse.error(res, e)
        }
    },

    signInSeller: async (req, res, next) => {
        const {body} = req
        try {
            let data = await sellers.findOne({
                where: {email: body.email}
            })
            if (data === null) {
                return BaseResponse.unauthorized(res, "User are not available on our records")
            } else {
                const payload = {
                    id: data.id,
                    name_shop: data.name_shop,
                    email: data.email,
                    photo: data.photo
                }
                const token = jwt.sign(payload, process.env.SECRET_TOKEN, {
                    expiresIn: 31540000
                })
                delete data.dataValues.password
                const newData = {
                    ...data.dataValues,
                    token
                }
                BaseResponse.success(res, newData)
            }
        } catch (e) {
            BaseResponse.error(res, e)
        }
    },

    signupCustomer: async (req, res, next) => {
        const {body} = req
        try {
            const saltRounds = 10
            body.password = bcrypt.hashSync(body.password, saltRounds)
            const createData = {
                ...body,
            }
            customers
                .create(createData)
                .then((data) => {
                    BaseResponse.success(res, createData)
                })
                .catch((error) => {
                    delete createData.password
                    return BaseResponse.error(res, error)
                })
        } catch (e) {
            return BaseResponse.error(res, e)
        }
    },

    signInCustomer: async (req, res, next) => {
        const {body} = req
        try {
            let data = await customers.findOne({
                where: {email: body.email}
            })
            if (data === null) {
                return BaseResponse.unauthorized(res, "User are not available on our records")
            } else {
                const payload = {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    photo: data.photo
                }
                const token = jwt.sign(payload, process.env.SECRET_TOKEN, {
                    expiresIn: 31540000
                })
                delete data.dataValues.password
                const newData = {
                    ...data.dataValues,
                    token
                }
                BaseResponse.success(res, newData)
            }
        } catch (e) {
            BaseResponse.error(res, e)
        }
    },
}