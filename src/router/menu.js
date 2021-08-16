const Router = require('koa-router')
const menuRouter = new Router({ prefix: '/menu' })
const { CreateMenu } = require('../controller/menu')
const { verifyCreateMenu } = require('../middleware/menu')
const { verifyAuth, verifyIdentity } = require('../middleware/auth')
menuRouter.post('/', verifyAuth, verifyIdentity, verifyCreateMenu, CreateMenu)
menuRouter.get('/', verifyAuth, verifyIdentity, verifyCreateMenu, CreateMenu)
module.exports = menuRouter
