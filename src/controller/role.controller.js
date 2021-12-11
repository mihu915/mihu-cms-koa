const {
  getUserRolePageList,
  alterUserRoleById,
  deleteUserRoleById,
  createRole
} = require('../service/role.service')

class RoleController {
  // 获取角色权限列表
  async getUserRoleList(ctx) {
    const result = await getUserRolePageList(ctx.request.body)
    ctx.body = {
      code: 200,
      data: result,
      message: '获取角色权限列表成功'
    }
  }

  async createUserRole(ctx) {
    await createRole(ctx.request.body)
    ctx.body = {
      code: 200,
      message: '创建角色权限成功'
    }
  }

  // 修改权限数据
  async alterUserRoleList(ctx) {
    const { id } = ctx.request.params
    await alterUserRoleById(id, ctx.request.body)
    ctx.body = {
      code: 200,
      message: '修改角色权限成功！'
    }
  }

  // 删除权限数据
  async deleteUserRole(ctx) {
    const { id } = ctx.request.params
    await deleteUserRoleById(id)
    ctx.body = {
      code: 200,
      message: '删除角色成功！'
    }
  }
}

module.exports = new RoleController()
