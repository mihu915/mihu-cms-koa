const connections = require('../app/database')
class ruleService {
  async getAllUserRuleList() {
    const statement = `SELECT 
    u.username,
    u.realname,
    u.enable,
    u.mobile,
    u.qq,
    u.position,
    u.last_login_ip,
    JSON_OBJECT('rule_name', r.rule_name, 'rule_intro', r.rule_intro) 
    rule_list FROM mh_user u LEFT JOIN mh_user_rule r ON u.rule_id = r.id ORDER BY u.rule_id 
    `
  }
  // 根据id查询权限信息
  async getRuleById(id) {
    const statement = `SELECT * FROM mh_user_rule WHERE id = ?`
    try {
      const [result] = await connections.execute(statement, [id])
      return result[0]
    } catch (error) {
      console.log(error)
    }
  }

  // 创建权限菜单
  async createRule(ruleInfo) {
    const { ruleName, ruleIntro, ruleMenu, currentTime } = ruleInfo
    const statement = `
    insert into mh_user_rule 
    (rule_name,rule_intro,rule_menu,created,updated) 
    values (?, ?, ?, ?, ?)`

    try {
      const [result] = await connections.execute(statement, [
        ruleName,
        ruleIntro,
        ruleMenu,
        currentTime,
        currentTime
      ])

      return result
    } catch (error) {
      console.log(error)
    }
  }

  async alterRule(ruleInfo) {
    const { id, ruleName, ruleIntro, ruleMenu, currentTime } = ruleInfo
    const statement = `
      update mh_user_rule set
      rule_name=?,
      rule_intro=?,
      rule_menu=?,
      updated=?
      where id = ?
    `
    try {
      const [result] = await connections.execute(statement, [
        ruleName,
        ruleIntro,
        ruleMenu,
        currentTime,
        id
      ])
      return result
    } catch (error) {
      console.log(error)
    }
  }

  async updateSuperAdminRule() {
    const currentTime = Math.round(new Date() / 1000)
    const statementSearch = `
      SELECT id FROM mh_menu
    `
    const statementUpdate = `
      update mh_user_rule set
      rule_menu=?,
      updated=?
      where id = 1
    `
    const [menuId] = await connections.execute(statementSearch)

    let menuIdArray = []
    menuId.forEach((item) => {
      menuIdArray.push(item.id)
    })

    const finalMenuId = menuIdArray.join(',')

    await connections.execute(statementUpdate, [finalMenuId, currentTime])
  }
}

module.exports = new ruleService()
