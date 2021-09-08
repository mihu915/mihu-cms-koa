const { sequelize, Op } = require('../app/database')
const { User, Role, Menu } = sequelize.models
class RoleService {
  // 获取角色列表
  async userRoleList(option) {
    const { offset, limit } = option
    const result = await Role.findAll({
      offset,
      limit
    })
      .then((res) => {
        return res
      })
      .catch((err) => {
        throw err
      })

    return result
  }

  // 更新超级管理员的菜单列表
  async updateSuperAdminRoleMenu() {
    let menuID = []
    let roleMenu
    try {
      const result = await Menu.findAll({
        attributes: ['id']
      })

      result.forEach((item) => {
        if (item.id) {
          menuID.push(item.id)
        }
      })

      roleMenu = menuID.join(',')

      await Role.update(
        {
          role_menu: roleMenu
        },
        {
          where: {
            id: 1
          }
        }
      )
    } catch (error) {
      throw error
    }
  }
}

module.exports = new RoleService()
