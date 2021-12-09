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
menuRouter.post('/', verifyAuth, updateOperationInfo, createMenu)

// 删除菜单
menuRouter.delete(
  '/:id',
  verifyAuth,
  verifyDeleteMenu,
  updateOperationInfo,
  deleteMenu
)

// 修改菜单
menuRouter.patch('/:id', verifyAuth, updateOperationInfo, alterMenu)

module.exports = menuRouter
