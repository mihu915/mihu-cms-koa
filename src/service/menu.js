const { sequelize, Op } = require('../app/database')
const { updateSuperAdminRoleMenu } = require('../service/role')

const { Menu, Role } = sequelize.models

class MenuService {
  // 通过id查询菜单
  async getMenuById(id) {
    const [result] = await Menu.findAll({
      where: {
        id
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

  // 创建菜单
  async addMenu(menuInfo) {
    try {
      // 插入菜单数据
      await Menu.create(menuInfo)
      // 更新role表中的菜单列表
      await updateSuperAdminRoleMenu()
    } catch (error) {
      throw error
    }
  }

  // 删除指定id的菜单
  async removeMenuById(id) {
    try {
      await Menu.destroy({
        where: {
          [Op.or]: [{ id }, { parent_id: id }]
        }
      })
      await updateSuperAdminRoleMenu()
    } catch (error) {
      throw error
    }
  }

  // 根据角色id获取菜单数据
  async getMenuByRoleId(roleId) {
    // 查询出角色对应的menuIdList
    const [roleMenuResult] = await Role.findAll({
      attributes: ['role_menu'],
      where: {
        id: roleId
      }
    })
      .then((res) => {
        return res
      })
      .catch((err) => {
        throw err
      })

    // 根据menuIdList查询出该角色对应的所有菜单
    const roleMenuList = roleMenuResult.role_menu.split(',')
    const MenuListResult = await Menu.findAll({
      where: {
        id: roleMenuList
      }
    })
      .catch((res) => {
        return res
      })
      .catch((err) => {
        throw err
      })

    // 将子级菜单添加至父级菜单
    MenuListResult.forEach((menu) => {
      menu.dataValues.children = []
      // 删除属性
      if (!menu.dataValues.parent_id && menu.dataValues.type === 1) {
        delete menu.dataValues.parent_id
      } else if (!menu.dataValues.icon) {
        delete menu.dataValues.icon
      }
      // 循环添加子菜单
      for (let i = 0; i < MenuListResult.length; i++) {
        if (
          MenuListResult[i].parent_id === menu.dataValues.id &&
          MenuListResult[i].type === 2
        ) {
          menu.dataValues.children.push(MenuListResult[i])
        }
      }
    })

    // 循环清除已添加过的子级菜单
    for (let i = 0; i < MenuListResult.length; i++) {
      if (MenuListResult[i].parent_id && MenuListResult[i].type === 2) {
        MenuListResult.splice(i, 1)
        i--
      }
    }
    return MenuListResult
  }

  async alterMenuById(id, menuInfo) {
    try {
      const result = await Menu.update(menuInfo, {
        where: {
          id
        }
      })
      console.log(result)
    } catch (error) {
      throw error
    }
  }

  // 分页获取菜单列表
  async getAllMenuList(option) {
    const result = await Menu.findAll({
      limit: option.limit,
      offset: option.offset,
      where: {
        type: 1
      },
      include: {
        model: Menu,
        as: 'children'
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
}

module.exports = new MenuService()
