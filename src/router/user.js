const Router = require('koa-router')

const {
  userInfo,
  userSignup,
  getUserList,
  userEnable,
  deleteUser
} = require('../controller/user')

const {
  verifyUserSignup,
  verifyUserEnable,
  verifyDeleteUser
} = require('../middleware/user')

const { handleListParam } = require('../middleware/verify-params')
const { verifyAuth } = require('../middleware/auth')

const userRouter = new Router({ prefix: '/user' })

// 获取登录用户信息
userRouter.get('/', verifyAuth, userInfo)

// 创建用户
userRouter.post('/', verifyAuth, verifyUserSignup, userSignup)

// 获取用户列表
userRouter.get('/list', verifyAuth, handleListParam, getUserList)

// 切换用户状态
userRouter.get('/enable/:id', verifyAuth, verifyUserEnable, userEnable)

// 删除用户
userRouter.delete('/:id', verifyAuth, verifyDeleteUser, deleteUser)

module.exports = userRouter
