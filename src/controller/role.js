const { userRoleList } = require('../service/role')
class RoleController {
  async getRoleList(ctx, next) {
    const option = ctx.request.query

    const result = await userRoleList(option)
    ctx.body = {
      code: 200,
      data: result,
      message: '获取角色列表成功'
    }
  }
}

module.exports = new RoleController()
