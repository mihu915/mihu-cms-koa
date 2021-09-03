const { sequelize, Op } = require('../app/database')
const { User, Role } = sequelize.models
class RoleService {
  // 获取所有用户的角色信息
  async userRoleList(option) {
    const { limit, offset } = option
    console.log(typeof limit)
    const result = await User.findAll({
      limit,
      offset,
      raw: true,
      attributes: {
        include: [
          [sequelize.literal('user_role.role_name'), 'role_name'],
          [sequelize.literal('user_role.role_intro'), 'role_intro'],
          [sequelize.literal('user_role.role_menu'), 'role_menu']
        ],
        exclude: ['id', 'password']
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
}

module.exports = new RoleService()
