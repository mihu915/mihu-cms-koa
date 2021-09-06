const { sequelize, Op } = require('../app/database')
const { User, Role, Menu } = sequelize.models
class RoleService {
  // 获取所有用户的角色信息
  async userRoleList(option) {
    const { limit, offset } = option
    console.log(typeof limit)
    const result = await User.findAll({
      limit,
      offset,
      raw: true,
      attributes: {
        include: [
          [sequelize.literal('user_role.role_name'), 'role_name'],
          [sequelize.literal('user_role.role_intro'), 'role_intro'],
          [sequelize.literal('user_role.role_menu'), 'role_menu']
        ],
        exclude: ['id', 'password']
      },
      include: {
        model: Role,
        as: 'user_role',
        attributes: []
      }
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
