const { createRuleMenu } = require('../service/rule')
class ruleController {
  async createUserRule(ctx, next) {
    ctx.body = {
      code: 200,
      message: '添加权限成功'
    }
  }

  async alterUserRule(ctx, next) {
    ctx.body = {
      code: 200,
      message: '修改权限成功'
    }
  }

  async createUserRuleMenu(ctx, next) {
    const ruleInfo = ctx.request.body
    ruleInfo.currentTime = ctx.currentData.currentTime
    const result = await createRuleMenu(ruleInfo)
    console.log(result)
    ctx.body = {
      code: 200,
      message: '添加权限菜单成功'
    }
  }

  async alterUserRuleMenu(ctx, next) {
    ctx.body = {
      code: 200,
      message: '修改权限菜单成功'
    }
  }
}

module.exports = new ruleController()
