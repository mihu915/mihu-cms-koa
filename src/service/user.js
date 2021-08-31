const { connection } = require('../app/database')
const { User } = require('../app/database')

class UserService {
  // 查询用户表
  async getUserByName(username) {
    try {
      const [result] = await User.findAll({
        where: {
          username
        }
      })
      return result
    } catch (error) {
      throw error
    }
  }

  // 用户注册,创建用户
  async createUser(params) {
    const { username, password, ip, time } = params
    try {
      await User.create({
        username,
        password,
        register_ip: ip,
        register_time: time,
        realname: username
      })
    } catch (error) {
      throw error
    }
  }

  // 更新用户数据
  async updateUserData(id, params) {
    const { ip, time } = params
    try {
      const [result] = await User.update(
        {
          last_login_ip: ip,
          last_login_time: time
        },
        {
          where: {
            id
          }
        }
      )
      return result
    } catch (error) {
      throw error
    }
  }

  // 获取用户信息
  async getUserInfoById(id) {
    const statement = `
    SELECT u.id, u.username,u.enable,u.realname,
     JSON_OBJECT('id',r.id,'rule_name', r.rule_name,'rule_intro',r.rule_intro) 
     rule FROM mh_user as u left JOIN mh_user_rule as r on  u.rule_id = r.id  
     WHERE u.id = ?
    `

    try {
      const [result] = await connection.execute(statement, [id])
      return result[0]
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new UserService()
