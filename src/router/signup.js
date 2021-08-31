const Router = require('koa-router')

const signupRouter = new Router({ prefix: '/signup' })
const { userSignup } = require('../controller/signup')
const { verifySignup } = require('../middleware/signup')
const { test } = require('../controller/test')

signupRouter.post('/', verifySignup, userSignup)

signupRouter.get('/test', test)

module.exports = signupRouter
