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
  handleListParam
} = require('../middleware/verify-params')
const { verifyAuth } = require('../middleware/auth.middleware')

const { updateOperationInfo } = require('../middleware/operation')

// 获取菜单列表
menuRouter.post('/list', verifyAuth, handleListParam, getMenuList)

// 查询用户对应菜单
menuRouter.get('/', verifyAuth, getRoleMenu)

// 添加菜单
menuRouter.post('/', verifyAuth, createMenu)

// 删除菜单
menuRouter.delete('/:id', verifyAuth, verifyDeleteMenu, deleteMenu)

// 修改菜单
menuRouter.patch('/:id', verifyAuth, alterMenu)

module.exports = menuRouter
