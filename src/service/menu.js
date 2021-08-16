const connections = require('../app/database')
class MenuService {
  async createMenu() {
    const title = null
    const statement = `
    INSERT INTO mh_menu (title)
    value(?)
    `
    try {
      const [result] = await connections.execute(statement, [title])
      return result
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new MenuService()
