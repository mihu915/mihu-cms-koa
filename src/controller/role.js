const { getUserRolePageList, alterUserRoleById } = require('../service/role')
class RoleController {
  async getUserRoleList(ctx) {
    const result = await getUserRolePageList(ctx.request.query)
    ctx.body = {
      code: 200,
      data: result,
      message: '获取角色权限列表成功'
    }
  }

  async alterUserRoleList(ctx) {
    const { id } = ctx.request.params
    await alterUserRoleById(id, ctx.request.body)
    ctx.body = {
      code: 200,
      message: '修改角色权限成功'
    }
  }
}

module.exports = new RoleController()
