const Router = require('koa-router')

const {
  getUserRoleList,
  alterUserRoleList,
  deleteUserRole,
  createUserRole
} = require('../controller/role.controller')

const { handleListParam } = require('../middleware/handle.params.middleware')

const { verifyAuth } = require('../middleware/auth.middleware')

const RoleRouter = new Router({ prefix: '/role' })
// 查询列表
RoleRouter.post('/list', verifyAuth, handleListParam, getUserRoleList)
// 修改
RoleRouter.patch('/:id', verifyAuth, alterUserRoleList)
// 删除
RoleRouter.delete('/:id', verifyAuth, deleteUserRole)
// 新增
RoleRouter.post('/', verifyAuth, createUserRole)

module.exports = RoleRouter
