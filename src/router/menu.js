const Router = require('koa-router')
const menuRouter = new Router({ prefix: '/menu' })

const {
  createMenu,
  getMenuList,
  deleteMenu,
  alterMenu
} = require('../controller/menu')

const {
  verifyDeleteMenu,
  verifyMenuExist
} = require('../middleware/verify-params')

const { verifyAuth } = require('../middleware/auth')

// 添加菜单
menuRouter.post('/', verifyAuth, createMenu)

// 查询菜单
menuRouter.get('/', verifyAuth, getMenuList)

// 删除菜单
menuRouter.delete(
  '/:id',
  verifyAuth,
  verifyMenuExist,
  verifyDeleteMenu,
  deleteMenu
)

// 修改菜单
menuRouter.patch('/:id', verifyAuth, verifyMenuExist, alterMenu)

module.exports = menuRouter
