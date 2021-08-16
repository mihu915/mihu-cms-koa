const Router = require('koa-router')
const loginRouter = new Router({ prefix: '/login' })
const { verifyLogin } = require('../middleware/login')
const { userLogin } = require('../controller/login')
loginRouter.post('/', verifyLogin, userLogin)

module.exports = loginRouter
