const { sequelize, Op } = require('../app/database')
const { updateSuperAdminRoleMenu } = require('../service/role')
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
    const menusId = await Role.findAll({
      attributes: ['role_menu'],
      where: {
        id: roleId
      }
    })
      .then((res) => {
        return res[0].role_menu.split(',')
      })
      .catch((err) => {
        throw err
      })

    // 查询出所有的菜单，顺序为升序
    const MenuListResult = await Menu.findAll({
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
      .catch((res) => {
        return res
      })
      .catch((err) => {
        throw err
      })
    const a = []
    handleMenu(MenuListResult, menusId)
    return MenuListResult
  }

  // 根据id修改菜单
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
