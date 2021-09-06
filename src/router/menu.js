const Router = require('koa-router')
const menuRouter = new Router({ prefix: '/menu' })

const {
  createMenu,
  getRoleMenu,
  deleteMenu,
  alterMenu,
  getMenuList
} = require('../controller/menu')

const {
  verifyDeleteMenu,
  verifyMenuExist,
  handleListParam
} = require('../middleware/verify-params')

const { verifyAuth } = require('../middleware/auth')

// 获取菜单列表
menuRouter.get('/list', verifyAuth, handleListParam, getMenuList)

// 添加菜单
menuRouter.post('/', verifyAuth, createMenu)

// 查询用户对应菜单
menuRouter.get('/', verifyAuth, getRoleMenu)

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
