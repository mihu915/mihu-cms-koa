const Router = require('koa-router')
const { getRoleList } = require('../controller/role')
const { handleListParam } = require('../middleware/verify-params')
const { verifyAuth } = require('../middleware/auth')
const RoleRouter = new Router({ prefix: '/role' })

RoleRouter.get('/list', verifyAuth, handleListParam, getRoleList)

module.exports = RoleRouter
