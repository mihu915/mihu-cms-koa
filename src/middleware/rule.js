const { createRuleMenuRules } = require('./config')
const { getRuleMenu } = require('../service/rule')
const { errorTypes } = require('../error/error-types')

class ruleMiddleware {
  async verifyCreateRuleMenu(ctx, next) {
    ctx.verifyParams(createRuleMenuRules)
    const { ruleId } = ctx.request.body
    const result = await getRuleMenu(ruleId)
    console.log(result)
    if (result) ctx.emitError(errorTypes.DO_NOT_ADD_DATA_REPEATEDLY)
    await next()
  }
}

module.exports = new ruleMiddleware()
