const Router = require('koa-router')
const { getRoleList } = require('../controller/role')
const { handleRoleListParam } = require('../middleware/role')
const RoleRouter = new Router({ prefix: '/role' })

RoleRouter.get('/list', handleRoleListParam, getRoleList)

module.exports = RoleRouter
