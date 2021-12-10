const { Op, sequelize } = require('../app/database')
const { handleWhere } = require('../utils/handle-where')

const { Role, User, Menu } = sequelize.models

class RoleService {
  // 获取角色列表
  async getUserRolePageList(option) {
    const { offset, limit, role_name, role_intro, created } = option
    const whereRule = {
      role_name: {
        type: 'like',
        value: role_name
      },
      role_intro: {
        type: 'like',
        value: role_intro
      },
      created: {
        type: 'interval',
        value: created
      }
    }
    const where = handleWhere(whereRule, Op)

    const result = await Role.findAll({
      offset,
      limit,
      order: [['created', 'DESC']],
      where
    })
      .then(async res => {
        const total_count = await Role.count({ where })
        return {
          list: res,
          total_count
        }
      })
      .catch(err => {
        throw err
      })
    return result
  }

  // 修改用户角色表信息
  async alterUserRoleById(id, params) {
    await Role.update(params, {
      where: {
        id
      }
    })
      .then(res => {
        return res
      })
      .catch(err => {
        throw err
      })
  }

  // 创建角色权限
  async createRole(params) {
    await Role.create(params)
      .then(res => {
        return res
      })
      .catch(err => {
        throw err
      })
  }

  // 删除用户角色权限信息
  async deleteUserRoleById(id) {
    await Role.destroy({
      where: {
        id
      }
    })
      .then(async res => {
        await User.update(
          {
            role_id: 3
          },
          {
            where: {
              role_id: id
            }
          }
        ).catch(err => {
          throw err
        })

        return res
      })
      .catch(err => {
        throw err
      })
  }

  // 更新超级管理员的菜单列表
  async updateSuperAdminRoleMenu() {
    let menuID = []
    let roleMenu

    const result = await Menu.findAll({
      attributes: ['id']
    })
      .then(res => {
        return res
      })
      .catch(err => {
        throw err
      })

    result.forEach(item => {
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
        },
        hooks: false
      }
    )
      .then()
      .catch(err => {
        throw err
      })
  }
}

module.exports = new RoleService()
