const Router = require('koa-router')
const menuRouter = new Router({ prefix: '/menu' })

const {
  createMenu,
  getMenu,
  deleteMenu,
  alterMenu
} = require('../controller/menu')

const {
  handleParams,
  verifyDeleteMenu,
  verifyAlterMenu
} = require('../middleware/menu')

const { verifyAuth } = require('../middleware/auth')

// 添加菜单
menuRouter.post('/', verifyAuth, handleParams, createMenu)

// 查询菜单
menuRouter.get('/', verifyAuth, getMenu)

// 删除菜单
menuRouter.delete('/:id', verifyDeleteMenu, deleteMenu)

// 修改菜单
menuRouter.post('/:id/alter', verifyAlterMenu, alterMenu)

module.exports = menuRouter
