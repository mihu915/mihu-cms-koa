const { sequelize, Op } = require('../app/database')
const { updateSuperAdminRuleMenu } = require('../service/rule')

const { Menu, Role } = sequelize.models

class MenuService {
  // 通过id查询菜单
  async getMenuById(id) {
    try {
      const [result] = await Menu.findAll({
        where: {
          id
        }
      })
      return result
    } catch (error) {
      throw error
    }
  }

  // 创建菜单
  async addMenu(menuInfo) {
    try {
      // 插入菜单数据
      await Menu.create(menuInfo)
      // 更新role表中的菜单列表
      await updateSuperAdminRuleMenu()
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
      await updateSuperAdminRuleMenu()
    } catch (error) {
      throw error
    }
  }

  // 根据角色id获取菜单数据
  async getMenuListByRoleId(roleId) {
    try {
      // 查询出角色对应的menuIdList
      const [roleMenuResult] = await Role.findAll({
        attributes: ['role_menu'],
        where: {
          id: roleId
        }
      })

      // 根据menuIdList查询出该角色对应的所有菜单
      const roleMenuList = roleMenuResult.role_menu.split(',')
      const MenuListResult = await Menu.findAll({
        where: {
          id: roleMenuList
        }
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
    } catch (error) {
      throw error
    }
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
}

module.exports = new MenuService()
