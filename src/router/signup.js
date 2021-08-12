const Router = require('koa-router')

const signupRouter = new Router({ prefix: '/signup' })
const { userSignup } = require('../controller/signup')
const { verifySignup } = require('../middleware/signup')

signupRouter.post('/', verifySignup, userSignup)

module.exports = signupRouter
