const { sequelize, Op } = require('../app/database')

const { User, Role } = sequelize.models

class UserService {
  // 获取所有用户的角色信息
  async userList(option) {
    const { limit, offset } = option
    console.log(typeof limit)
    const result = await User.findAll({
      limit,
      offset,
      raw: true,
      attributes: {
        include: [[sequelize.literal('user_role.role_name'), 'role_name']],
        exclude: ['password']
      },
      include: {
        model: Role,
        as: 'user_role',
        attributes: []
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

  // 根据用户名查询用户信息
  async getUserByName(username, id) {
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

  // 根据id删除用户
  async deleteUserById(id) {
    await User.destroy({
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
  }

  // 根据id修改用户信息
  async alterUserInfoById(id, info) {
    await User.update(info, {
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
  }

  // 切换启用用户状态
  async switchUserEnable(params) {
    const { id, enable } = params
    await User.update(
      {
        enable
      },
      {
        where: {
          id
        }
      }
    )
      .then((res) => {
        return res
      })
      .catch((err) => {
        throw err
      })
  }

  // 超管创建用户
  async createUser(params) {
    await User.create(params)
      .then((res) => {
        return res
      })
      .catch((err) => {
        throw err
      })
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

  // 获取登录用户信息
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
