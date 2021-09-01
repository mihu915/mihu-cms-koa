const { getRuleById } = require('../service/rule')

class ruleMiddleware {
  // 校验创建权限菜单参数
  async verifyCreateRule(ctx, next) {
    ctx.verifyParams(createRuleRules)

    await next()
  }

  // 校验修改权限菜单参数中间件
  async verifyAlterRule(ctx, next) {
    const { id } = ctx.request.body

    // 校验数据是否存在
    const result = await getRuleById(id)
    if (!result) ctx.emitError(errorTypes.CONTENT_DOES_NOT_EXIST)

    await next()
  }
}

module.exports = new ruleMiddleware()
