const { sequelize } = require('../app/database')

const { User, Role } = sequelize.models

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
    const [result] = await User.findAll({
      attributes: {
        exclude: ['password']
      },
      include: {
        model: Role,
        as: 'user_role'
      },
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
}

module.exports = new UserService()
