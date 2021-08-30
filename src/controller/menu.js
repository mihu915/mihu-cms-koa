const { addMenu, getMenuByRuleId, removeMenuById, alterMenuById } = require('../service/menu')

class MenuController {
  async createMenu(ctx) {
    const menuInfo = ctx.request.body

    menuInfo.currentTime = ctx.currentData.currentTime
    menuInfo.realIP = ctx.currentData.realIP

    await addMenu(menuInfo)

    ctx.body = {
      code: 200,
      message: '创建菜单成功'
    }
  }

  async getMenu(ctx) {
    const { rule_id } = ctx.user
    const result = await getMenuByRuleId(rule_id)
    ctx.body = {
      code: 200,
      data: result,
      message: '获取菜单成功'
    }
  }

  async deleteMenu(ctx) {
    const { id } = ctx.request.params
    await removeMenuById(id)
    ctx.body = {
      code: 200,
      message: '删除菜单成功'
    }
  }

  async alterMenu(ctx) {
    const menuInfo = ctx.request.body
    menuInfo.id = ctx.request.params.id
    menuInfo.updated = ctx.currentData.currentTime
    await alterMenuById(menuInfo)
    ctx.body = {
      code: 200,
      message: '修改菜单成功'
    }
  }
}

module.exports = new MenuController()
