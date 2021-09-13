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
const { updateOperationInfo } = require('../middleware/operation')
const RoleRouter = new Router({ prefix: '/role' })
// 查询列表
RoleRouter.post('/list', verifyAuth, handleListParam, getUserRoleList)
// 修改
RoleRouter.patch('/:id', verifyAuth, updateOperationInfo, alterUserRoleList)
// 删除
RoleRouter.delete(
  '/:id',
  verifyAuth,
  verifyDeleteRoleId,
  updateOperationInfo,
  deleteUserRole
)
// 新增
RoleRouter.post('/', verifyAuth, updateOperationInfo, createUserRole)

module.exports = RoleRouter
