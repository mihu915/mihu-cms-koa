const Router = require('koa-router')

const {
  getUserRoleList,
  alterUserRoleList,
  deleteUserRole,
  createUserRole
} = require('../controller/role')

const {
  handleListParam,
  verifyDeleteRoleId
} = require('../middleware/verify-params')

const { verifyAuth } = require('../middleware/auth')

const RoleRouter = new Router({ prefix: '/role' })

RoleRouter.get('/list', verifyAuth, handleListParam, getUserRoleList)
RoleRouter.patch('/:id', verifyAuth, alterUserRoleList)
RoleRouter.delete('/:id', verifyDeleteRoleId, verifyAuth, deleteUserRole)
RoleRouter.post('/', verifyAuth, createUserRole)

module.exports = RoleRouter
