const Router = require('koa-router')
const { getRoleList } = require('../controller/role')
const { handleRoleListParam } = require('../middleware/role')
const { verifyAuth } = require('../middleware/auth')
const RoleRouter = new Router({ prefix: '/role' })

RoleRouter.get('/list', verifyAuth, handleRoleListParam, getRoleList)

module.exports = RoleRouter
