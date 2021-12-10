const Router = require('koa-router')
const loginRouter = new Router({ prefix: '/login' })
const { verifyLogin } = require('../middleware/login.middleware')

const { userLogin } = require('../controller/login.controller')

loginRouter.post('/', verifyLogin, userLogin)

module.exports = loginRouter
