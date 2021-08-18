const Router = require('koa-router')

const { verifyCreateRule, verifyAlterRule } = require('../middleware/rule')

const { verifyAuth } = require('../middleware/auth')
const { createUserRule, alterUserRule } = require('../controller/rule')

const ruleRouter = new Router({ prefix: '/rule' })

// 获取权限信息
// ruleRouter.get('/',)
// 创建权限
ruleRouter.post('/create', verifyAuth, verifyCreateRule, createUserRule)

// 修改权限菜单
ruleRouter.patch('/:id/alter', verifyAuth, verifyAlterRule, alterUserRule)

module.exports = ruleRouter
