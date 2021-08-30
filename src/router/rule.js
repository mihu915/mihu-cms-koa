const Router = require('koa-router')

const { verifyCreateRule, verifyAlterRule } = require('../middleware/rule')

const { verifyAuth } = require('../middleware/auth')
const {
  createUserRule,
  alterUserRule,
  getUserRuleList
} = require('../controller/rule')

const ruleRouter = new Router({ prefix: '/rule' })

// 创建权限
ruleRouter.post('/', verifyAuth, verifyCreateRule, createUserRule)

// 修改权限菜单
ruleRouter.patch('/:id/alter', verifyAuth, verifyAlterRule, alterUserRule)

// 获取所有用户角色列表
ruleRouter.get('/list', getUserRuleList)

module.exports = ruleRouter
