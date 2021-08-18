const Router = require('koa-router')

const userRouter = new Router({ prefix: '/users' })

const { userInfo } = require('../controller/user')
const { verifyAuth } = require('../middleware/auth')
userRouter.get('/', verifyAuth, userInfo)

module.exports = userRouter
