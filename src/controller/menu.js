const {
  addMenu,
  removeMenuById,
  alterMenuById,
  getMenuListByRoleId
} = require('../service/menu')

class MenuController {
  async createMenu(ctx) {
    const menuInfo = ctx.request.body

    await addMenu(menuInfo)

    ctx.body = {
      code: 200,
      message: '创建菜单成功'
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

  async getMenuList(ctx) {
    const { role_id } = ctx.user
    const result = await getMenuListByRoleId(role_id)
    ctx.body = {
      code: 200,
      data: result,
      message: '获取菜单成功'
    }
  }

  async alterMenu(ctx) {
    const { id } = ctx.request.params
    const menuInfo = ctx.request.body
    await alterMenuById(id, menuInfo)
    ctx.body = {
      code: 200,
      message: '修改菜单成功'
    }
  }
}

module.exports = new MenuController()
