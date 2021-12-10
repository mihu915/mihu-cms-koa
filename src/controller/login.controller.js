const jwt = require('jsonwebtoken')
const config = require('../app/config')
const { updateUserData } = require('../service/user.service')

// 登录，颁发权限操作
class loginController {
  async userLogin(ctx, next) {
    const { id, username, role_id } = ctx.user
    const { $time, $ip } = ctx.request.body
    const params = {
      last_login_ip: $ip,
      last_login_time: $time
    }

    // 更新登录数据
    await updateUserData(id, params)

    // 为登录成功的用户颁发token
    const token = jwt.sign({ id, username, role_id }, config.PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: 'RS256'
    })

    ctx.body = {
      code: 200,
      data: {
        id,
        token
      },
      message: '用户登录成功'
    }
  }
}

module.exports = new loginController()
