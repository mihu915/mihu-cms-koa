// 注册相关
class SignupController {
  // 注册返回结果中间件
  async userSignup(ctx, next) {
    ctx.body = {
      code: 200,
      message: '注册成功'
    }
  }
}

module.exports = new SignupController()
