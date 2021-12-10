const { Op, sequelize } = require('../app/database')

const { updateSuperAdminRoleMenu } = require('./role.service')
const { handleMenu } = require('../utils/handle-menu')

const { Menu, Role } = sequelize.models

class MenuService {
  // 通过id查询菜单
  async getMenuById(id) {
    const [result] = await Menu.findAll({
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

    return result
  }

  // 创建菜单
  async addMenu(menuInfo) {
    // 插入菜单数据
    await Menu.create(menuInfo)
      .then(async res => {
        await updateSuperAdminRoleMenu()
      })
      .catch(err => {
        throw err
      })
  }

  // 删除指定id的菜单
  async removeMenuById(id) {
    await Menu.destroy({
      where: {
        [Op.or]: [{ id }, { parent_id: id }]
      }
    })
      .then(res => {
        return res
      })
      .catch(err => {
        throw err
      })
    await updateSuperAdminRoleMenu()
  }

  // 根据角色id获取菜单数据
  async getMenuByRoleId(roleId) {
    // 查询出角色对应的menuIdList
    const menusId = await Role.findAll({
      attributes: ['role_menu'],
      where: {
        id: roleId
      }
    })
      .then(res => {
        if (!res[0].role_menu) return []
        return res[0].role_menu.split(',')
      })
      .catch(err => {
        throw err
      })

    // 查询出所有的菜单，顺序为升序
    const menuListResult = await Menu.findAll({
      include: {
        model: Menu,
        as: 'children'
      },
      where: {
        type: 1
      },
      order: [
        ['sort', 'ASC'],
        ['children', 'sort', 'ASC']
      ]
    })
      .then(res => {
        return res
      })
      .catch(err => {
        throw err
      })
    const menuList = handleMenu(menuListResult, menusId)
    return menuList
  }

  // 根据id修改菜单
  async alterMenuById(id, menuInfo) {
    try {
      await Menu.update(menuInfo, {
        where: {
          id
        }
      })
    } catch (error) {
      throw error
    }
  }

  // 分页获取菜单列表
  async getMenuPageList(option) {
    const { offset, limit } = option

    const result = await Menu.findAll({
      limit: limit,
      offset: offset,
      order: [
        ['sort', 'ASC'],
        ['children', 'sort', 'ASC']
      ],
      where: {
        type: 1
      },

      include: {
        model: Menu,
        as: 'children'
      }
    })
      .then(async res => {
        const total_count = await Menu.count()

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
}

module.exports = new MenuService()
