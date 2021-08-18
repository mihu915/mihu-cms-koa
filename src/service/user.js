const connections = require('../app/database')

class UserService {
  // 查询用户表
  async getUserByName(username) {
    const statement = `
    SELECT * FROM mh_user WHERE username = ?
    `
    try {
      const [result] = await connections.execute(statement, [username])
      return result[0]
    } catch (error) {
      console.log(error)
    }
  }

  // 用户注册,创建用户
  async createUser(username, password, realIP, currentTime) {
    const statement = `
    insert into mh_user 
    (username,password,realname,register_ip,register_time,created,updated) 
    values (?, ?, ?, ?, ?, ?, ?)`

    try {
      const [result] = await connections.execute(statement, [
        username,
        password,
        username,
        realIP,
        currentTime,
        currentTime,
        currentTime
      ])
      return result
    } catch (error) {
      console.log(error)
    }
  }

  async updateUserData(id, realIP, currentTime) {
    const statement = `
    update mh_user set 
    last_login_ip=?, 
    last_login_time=?,
    updated=?
    where id=?
    `

    try {
      const [result] = await connections.execute(statement, [
        realIP,
        currentTime,
        currentTime,
        id
      ])
      return result
    } catch (error) {
      console.log(error)
    }
  }

  async getUserInfoById(id) {
    const statement = `
    SELECT u.id, u.username,u.enable,u.realname,
     JSON_OBJECT('id',r.id,'rule_name', r.rule_name,'rule_intro',r.rule_intro) 
     rule FROM mh_user as u left JOIN mh_user_rule as r on  u.rule_id = r.id  
     WHERE u.id = ?
    `

    try {
      const [result] = await connections.execute(statement, [id])
      return result[0]
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new UserService()
