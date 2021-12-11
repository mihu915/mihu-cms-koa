const Router = require('koa-router')

const {
  userInfo,
  userSignup,
  getUserList,
  userEnable,
  deleteUser,
  alterUserInfo
} = require('../controller/user.controller')

const {
  verifyUserEnable,
  verifyDeleteUser,
  verifyUserInfo
} = require('../middleware/user.middleware')

const { handleListParam } = require('../middleware/handle.params.middleware')
const { verifyAuth } = require('../middleware/auth.middleware')

const userRouter = new Router({ prefix: '/user' })

// 登录后获取用户信息
userRouter.get('/', verifyAuth, userInfo)

// 获取用户列表
userRouter.post('/list', verifyAuth, handleListParam, getUserList)

// 创建用户
userRouter.post('/', verifyAuth, verifyUserInfo, userSignup)

// 修改用户信息
userRouter.patch('/:id', verifyAuth, verifyUserInfo, alterUserInfo)

// 切换用户状态
userRouter.get('/enable/:id', verifyAuth, verifyUserEnable, userEnable)

// 删除用户
userRouter.delete('/:id', verifyAuth, deleteUser)

module.exports = userRouter
