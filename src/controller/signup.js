const { createUser } = require('../service/user')
// 注册工具中间件
class SignupController {
  // 注册返回结果中间件
  async userSignup(ctx, next) {
    const { username, password } = ctx.request.body
    const { realIP, currentTime } = ctx.currentData

    const result = await createUser(username, password, realIP, currentTime)
    console.log(result)
    ctx.body = {
      code: 200,
      message: '注册成功'
    }
  }
}

module.exports = new SignupController()
