const Router = require('koa-router')

const { getUserRoleList, alterUserRoleList } = require('../controller/role')
const { handleListParam } = require('../middleware/verify-params')
const { verifyAuth } = require('../middleware/auth')

const RoleRouter = new Router({ prefix: '/role' })

RoleRouter.get('/list', verifyAuth, handleListParam, getUserRoleList)
RoleRouter.patch('/:id', verifyAuth, alterUserRoleList)
// RoleRouter.delete('/:id')

module.exports = RoleRouter
