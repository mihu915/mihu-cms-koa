const { createUser } = require('../service/user')
// 注册工具中间件
class SignupController {
  // 注册返回结果中间件
  async userSignup(ctx, next) {
    

    try {
      await createUser(ctx.request.body)
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
