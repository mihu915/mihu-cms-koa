const Router = require('koa-router')
const menuRouter = new Router({ prefix: '/menu' })
const { CreateMenu, getMenu } = require('../controller/menu')
const { verifyCreateMenu } = require('../middleware/menu')
const { verifyAuth, verifyIdentity } = require('../middleware/auth')
// 添加菜单
menuRouter.post(
  '/create',
  verifyAuth,
  verifyIdentity,
  verifyCreateMenu,
  CreateMenu
)

// 查询菜单
menuRouter.get('/', verifyAuth, getMenu)

module.exports = menuRouter
