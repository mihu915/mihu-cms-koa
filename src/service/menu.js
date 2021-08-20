const connections = require('../app/database')
const { updateSuperAdminRule } = require('../service/rule')

class MenuService {
  // 通过id查询菜单
  async getMenuById(id) {
    const statement = `
      SELECT * FROM mh_menu WHERE id = ?
    `
    try {
      const [result] = await connections.execute(statement, [id])
      return result[0]
    } catch (error) {
      throw error
    }
  }

  // 创建菜单
  async addMenu(menuInfo) {
    const { title, url, icon, sort, type, parentId, currentTime } = menuInfo
    const statement = `
      INSERT INTO mh_menu 
      (title,icon,sort,type,url,parent_id,created,updated)
      value(?,?,?,?,?,?,?,?)
    `
    try {
      const [result] = await connections.execute(statement, [
        title,
        icon,
        sort,
        type,
        url,
        parentId,
        currentTime,
        currentTime
      ])

      await updateSuperAdminRule()
      return result
    } catch (error) {
      throw error
    }
  }

  // 获取菜单数据
  async getMenuByRuleId(ruleId) {
    let statement = null
    let result = null

    statement = `
      SELECT id,title,icon,sort,type,url,parent_id FROM mh_menu
        WHERE
      FIND_IN_SET(id,(SELECT rule_menu FROM mh_user_rule WHERE id = ?))
      `
    try {
      const [queryResult] = await connections.execute(statement, [ruleId])
      result = queryResult
    } catch (error) {
      throw error
    }

    // 将子级菜单添加至父级菜单
    result.forEach((item) => {
      item.children = []
      // 删除属性
      if (!item.parent_id) {
        delete item.parent_id
      } else if(!item.icon) {
        delete item.icon
      }
      // 循环添加子菜单
      for (let i = 0; i < result.length; i++) {
        if (result[i].parent_id === item.id) {
          item.children.push(result[i])
        }
      }
    })

    // 循环清除已添加过的子级菜单
    for (let i = 0; i < result.length; i++) {
      if (result[i].parent_id) {
        result.splice(i, 1)
        i--
      }
    }

    return result
  }

  // 删除指定菜单
  async removeMenuById(id) {
    const statement = `
      DELETE  FROM mh_menu WHERE id = ?
    `
    try {
      const [result] = await connections.execute(statement, [id])
      await updateSuperAdminRule()
      console.log(result)
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = new MenuService()
