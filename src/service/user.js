const { sequelize } = require('../app/database')

const User = sequelize.models.User

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
    const { username, password, $ip, $time } = params
    try {
      await User.create({
        username,
        password,
        register_ip: $ip,
        register_time: $time,
        realname: username
      })
    } catch (error) {
      throw error
    }
  }

  // 更新用户数据，登录操作
  async updateUserData(id, params) {
    const { $ip, $time } = params
    try {
      const [result] = await User.update(
        {
          last_login_ip: $ip,
          last_login_time: $time
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
    const Role = sequelize.models.Role
    try {
      const [result] = await User.findAll({
        attributes: [
          'id',
          'username',
          'enable',
          'role_id',
          'operator_ip',
          'register_time',
          'operator_time',
          'realname',
          'mobile',
          'qq',
          'position'
        ],
        include: {
          model: Role,
          as: 'user_role'
        },
        where: {
          id
        }
      })

      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = new UserService()
