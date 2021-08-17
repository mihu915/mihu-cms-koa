const connections = require('../app/database')
class ruleService {
  async getRuleMenu(ruleId) {
    const statement = `SELECT * FROM mh_rule_menu WHERE rule_id = ?`
    try {
      const [result] = await connections.execute(statement, [ruleId])
      return result[0]
    } catch (error) {
      console.log(error)
    }
  }

  async createRuleMenu(ruleInfo) {
    console.log(ruleInfo)
    const { ruleId, menuId, currentTime } = ruleInfo
    const statement = `
    insert into mh_rule_menu 
    (rule_id,menu_id,created,updated) 
    values (?, ?, ?, ?)`
    try {
      const [result] = await connections.execute(statement, [
        ruleId,
        menuId,
        currentTime,
        currentTime
      ])
      return result
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new ruleService()
