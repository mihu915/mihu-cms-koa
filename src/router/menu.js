const Router = require('koa-router')
const menuRouter = new Router({ prefix: '/menu' })
const { createMenu, getMenu, deleteMenu } = require('../controller/menu')
const { verifyCreateMenu, verifyDeleteMenu } = require('../middleware/menu')
const { verifyAuth } = require('../middleware/auth')

// 添加菜单
menuRouter.post('/create', verifyAuth, verifyCreateMenu, createMenu)

// 查询菜单
menuRouter.get('/', verifyAuth, getMenu)

menuRouter.delete('/:id', verifyDeleteMenu, deleteMenu)

module.exports = menuRouter
