const connections = require('../app/database')
class MenuService {
  // 创建菜单
  async create(menuInfo) {
    const { title, url, icon, sort, level, parentId, currentTime } = menuInfo
    const statement = `
    INSERT INTO mh_menu 
    (title,icon,sort,level,url,parent_id,created,updated)
    value(?,?,?,?,?,?,?,?)
    `
    try {
      const [result] = await connections.execute(statement, [
        title,
        icon,
        sort,
        level,
        url,
        parentId,
        currentTime,
        currentTime
      ])
      return result
    } catch (error) {
      console.log(error)
    }
  }

  // 获取菜单数据
  async getMenuByRuleId(ruleId) {
    let statement = null
    let result = null

    if (ruleId === 1) {
      statement = `SELECT id,title,icon,sort,level,url,parent_id FROM mh_menu`
      try {
        const [queryResult] = await connections.execute(statement)
        result = queryResult
      } catch (error) {
        console.log(error)
      }
    } else {
      statement = `
      SELECT * FROM mh_menu
        WHERE
      FIND_IN_SET(id,(SELECT menu_id FROM mh_rule_menu WHERE rule_id = ?))
      `
      try {
        const [queryResult] = await connections.execute(statement, [ruleId])
        result = queryResult
      } catch (error) {
        console.log(error)
      }
    }

    // 将子级菜单添加至父级菜单
    result.forEach((item) => {
      item.children = []
      for (let i = 0; i < result.length; i++) {
        if (result[i].parent_id === item.id) {
          item.children.push(result[i])
        }
      }
    })

    // 删除已添加过的子级菜单
    for (let i = 0; i < result.length; i++) {
      if (result[i].parent_id) {
        result.splice(i, 1)
        i--
      }
    }

    return result
  }
}

module.exports = new MenuService()
