const { getUserByName } = require('../service/user')
const { errorTypes } = require('../error/error-types')

class SignupMiddleware {
  async verifySignup(ctx, next) {

    const { username, password } = ctx.request.body
    if(!username || !password){
      ctx.emitError(errorTypes.USERNAME_OR_PASSWORD_IS_REQUIRED)
    }

    const result = await getUserByName(username)
    if (result) ctx.emitError(errorTypes.USER_ALREADY_EXISTS)

    await next()
  }
}

module.exports = new SignupMiddleware()
