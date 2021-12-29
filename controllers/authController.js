const {sellers, customers, Sequelize} = require("../models")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const BaseResponse = require("../helpers/response/response")
const {error} = require("../helpers/response/response");
const Op = Sequelize.Op

module.exports = {
    signupSeller : (req, res, next) => {
        const {body} = req
        try {
            const saltRounds = 10
            body.password = bcrypt.hashSync(body.password, saltRounds)
            const createData = {
                ...body,
            }
            sellers.create(createData)
                .then((data) => {
                    BaseResponse.success(res, createData)
                })
                .catch((error) =>{
                    delete createData.password
                    return BaseResponse.error(res, error)
                })
        } catch (e) {
            return BaseResponse.error(res, e)
        }
    },


}