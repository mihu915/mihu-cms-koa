const jwt = require('jsonwebtoken')
const config = require('../app/config')
const { updateUserData } = require('../service/user')

// 登录工具中间件
class loginController {
  async userLogin(ctx, next) {
    const { id, username, rule_id } = ctx.user
    const { realIP, currentTime } = ctx.currentData

    // 更新登录数据
    await updateUserData(id, realIP, currentTime)

    // 为登录成功的用户颁发token
    const token = jwt.sign({ id, username, rule_id }, config.PRIVATE_KEY, {
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
