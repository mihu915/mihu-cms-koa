const { getUserByName } = require('../service/user')
const { md5Password } = require('../utils/handle-password')

class LoginMiddleware{
  // 校验登录参数中间件
  async verifyLogin(ctx, next) {
    const { username, password } = ctx.request.body
    
    // 用户不存在则报错
    ctx.user = await getUserByName(username)
    if (!ctx.user) ctx.emitError(errorTypes.USER_DOES_NOT_EXIST)

    // 校验密码是否正确
    if (md5Password(password) !== ctx.user.password) {
      ctx.emitError(errorTypes.WRONG_PASSWORD)
    }
    await next()
  }
}

module.exports = new LoginMiddleware()