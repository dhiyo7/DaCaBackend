const express = require("express")
const authRouter = express.Router()
const authController = require('../controllers/authController')

// const authMiddleware = require('../helpers/middleware/authMiddleware')

authRouter.post("/sign-up-seller", authController.signupSeller)
authRouter.post("/sign-in-seller", authController.signInSeller)
authRouter.post("/sign-up-customer", authController.signupCustomer)
authRouter.post("/sign-up-customer", authController.signInCustomer)

module.exports = authRouter;