const { createRule, alterRule } = require('../service/rule')
class ruleController {
  async createUserRule(ctx, next) {
    const ruleInfo = ctx.request.body
    ruleInfo.currentTime = ctx.currentData.currentTime
    try {
      await createRule(ruleInfo)
      ctx.body = {
        code: 200,
        message: '添加权限成功'
      }
    } catch (error) {
      ctx.body = {
        code: 500,
        error
      }
    }
  }

  async alterUserRule(ctx, next) {
    const ruleInfo = ctx.request.body
    ruleInfo.currentTime = ctx.currentData.currentTime
    console.log(ruleInfo)
    try {
      await alterRule(ruleInfo)
      ctx.body = {
        code: 200,
        message: '修改权限菜单成功'
      }
    } catch (error) {
      ctx.body = {
        code: 500,
        error
      }
    }
  }
}

module.exports = new ruleController()
