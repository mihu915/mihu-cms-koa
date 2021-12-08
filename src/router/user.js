const Router = require('koa-router')

const {
  userInfo,
  userSignup,
  getUserList,
  userEnable,
  deleteUser,
  alterUserInfo
} = require('../controller/user')

const {
  verifyUserEnable,
  verifyDeleteUser,
  verifyUserInfo
} = require('../middleware/user')

const { handleListParam } = require('../middleware/verify-params')
const { verifyAuth } = require('../middleware/auth.middleware')
const { updateOperationInfo } = require('../middleware/operation')

const userRouter = new Router({ prefix: '/user' })

// 登录后获取用户信息
userRouter.get('/', verifyAuth, userInfo)

// 获取用户列表
userRouter.post('/list', verifyAuth, handleListParam, getUserList)

// 创建用户
userRouter.post(
  '/',
  verifyAuth,
  verifyUserInfo,
  updateOperationInfo,
  userSignup
)

// 修改用户信息
userRouter.patch(
  '/:id',
  verifyAuth,
  verifyUserInfo,
  updateOperationInfo,
  alterUserInfo
)

// 切换用户状态
userRouter.get(
  '/enable/:id',
  verifyAuth,
  verifyUserEnable,
  updateOperationInfo,
  userEnable
)

// 删除用户
userRouter.delete(
  '/:id',
  verifyAuth,
  verifyDeleteUser,
  updateOperationInfo,
  deleteUser
)

module.exports = userRouter
