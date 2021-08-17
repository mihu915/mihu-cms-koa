const Router = require('koa-router')
const { verifyCreateRuleMenu } = require('../middleware/rule')
const { verifyAuth, verifyIdentity } = require('../middleware/auth')
const { createUserRuleMenu } = require('../controller/rule')

const ruleRouter = new Router({ prefix: '/rule' })
ruleRouter.post(
  '/menu/create',
  verifyAuth,
  verifyIdentity,
  verifyCreateRuleMenu,
  createUserRuleMenu
)
module.exports = ruleRouter
