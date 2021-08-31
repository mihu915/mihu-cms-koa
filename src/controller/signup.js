const { createUser } = require('../service/user')
// 注册工具中间件
class SignupController {
  // 注册返回结果中间件
  async userSignup(ctx, next) {
    const { username, password } = ctx.request.body
    ctx.ip

    try {
      await createUser(username, password, ctx.ip)
      ctx.body = {
        code: 200,
        message: '注册成功'
      }
    } catch (error) {
      ctx.body = {
        code: 500,
        error
      }
    }
  }
}

module.exports = new SignupController()
