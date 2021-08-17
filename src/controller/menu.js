const { create, getMenuByRuleId } = require('../service/menu')

class MenuController {
  async CreateMenu(ctx, next) {
    const menuInfo = ctx.request.body
    const { rule_id } = ctx.user

    menuInfo.currentTime = ctx.currentData.currentTime
    menuInfo.realIP = ctx.currentData.realIP

    await create(menuInfo)
    const result = await getMenuByRuleId(rule_id)

    ctx.body = {
      code: 200,
      data: result,
      message: '创建菜单成功'
    }
  }

  async getMenu(ctx, next) {
    const { rule_id } = ctx.user
    const result = await getMenuByRuleId(rule_id)
    ctx.body = {
      code: 200,
      data: result,
      message: '获取菜单成功'
    }
  }
}

module.exports = new MenuController()
