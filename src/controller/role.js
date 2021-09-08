const { userRoleList } = require('../service/role')
class RoleController {
  async getUserRoleList(ctx) {
    const result = await userRoleList(ctx.request.query)
    ctx.body = {
      code: 200,
      data: result,
      message: '获取角色列表成功'
    }
  }
}

module.exports = new RoleController()
