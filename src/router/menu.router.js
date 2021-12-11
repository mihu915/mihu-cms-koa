const {
  createMenu,
  getRoleMenu,
  deleteMenu,
  alterMenu,
  getMenuList
} = require('../controller/menu.controller')

const { handleListParam } = require('../middleware/handle.params.middleware')

const { verifyAuth } = require('../middleware/auth.middleware')

const Router = require('koa-router')

const menuRouter = new Router({ prefix: '/menu' })

// 获取菜单列表
menuRouter.post('/list', verifyAuth, handleListParam, getMenuList)

// 查询用户对应菜单
menuRouter.get('/', verifyAuth, getRoleMenu)

// 添加菜单
menuRouter.post('/', verifyAuth, createMenu)

// 删除菜单
menuRouter.delete('/:id', verifyAuth, deleteMenu)

// 修改菜单
menuRouter.patch('/:id', verifyAuth, alterMenu)

module.exports = menuRouter
