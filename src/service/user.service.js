const { Op, sequelize } = require('../app/database')
const { handleWhere } = require('../utils/handle-where')

const { User, Role } = sequelize.models

class UserService {
  // 查询用户的信息

  async userPageList(option) {
    const { limit, offset, username, enable, nickname, created, qq, mobile } =
      option

    const whereRule = {
      username: {
        type: 'like',
        value: username
      },
      nickname: {
        type: 'like',
        value: nickname
      },
      qq: {
        type: 'like',
        value: qq
      },
      mobile: {
        type: 'like',
        value: mobile
      },
      enable: {
        value: enable
      },
      created: {
        type: 'interval',
        value: created
      }
    }

    const where = handleWhere(whereRule, Op)

    const result = await User.findAll({
      limit,
      offset,
      where,
      order: [['created', 'DESC']],
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
      .then(async res => {
        const total_count = await User.count({ where })
        return {
          list: res,
          total_count
        }
      })
      .catch(err => {
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
      .then(res => {
        return res
      })
      .catch(err => {
        throw err
      })
  }

  // 根据id修改用户信息
  async alterUserInfoById(id, info) {
    await User.update(info, {
      where: {
        id
      },
      fields: ['avatar', 'enable', 'role_id', 'nickname', 'qq', 'mobile']
    })
      .then(res => {
        return res
      })
      .catch(err => {
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
      .then(res => {
        return res
      })
      .catch(err => {
        throw err
      })
  }

  // 创建用户
  async createUser(params) {
    await User.create(params)
      .then(res => {
        return res
      })
      .catch(err => {
        throw err
      })
  }

  // 用户登录更新数据
  async updateUserData(id, params) {
    const [result] = await User.update(params, {
      where: {
        id: id
      },
      hooks: false
    })
      .then(res => {
        return res
      })
      .catch(err => {
        throw err
      })
    return result
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
      .then(async res => {
        return res
      })
      .catch(err => {
        throw err
      })

    return result
  }
}

module.exports = new UserService()
