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
const { verifyAuth } = require('../middleware/auth')

const userRouter = new Router({ prefix: '/user' })

// 登录后获取用户信息
userRouter.get('/', verifyAuth, userInfo)

// 管理员创建用户
userRouter.post('/', verifyAuth, verifyUserInfo, userSignup)

// 管理员修改用户信息
userRouter.patch('/:id', verifyAuth, verifyUserInfo, alterUserInfo)

// 管理员获取用户列表
userRouter.get('/list', verifyAuth, handleListParam, getUserList)

// 管理员切换用户状态
userRouter.get('/enable/:id', verifyAuth, verifyUserEnable, userEnable)

// 删除用户
userRouter.delete('/:id', verifyAuth, verifyDeleteUser, deleteUser)

module.exports = userRouter
