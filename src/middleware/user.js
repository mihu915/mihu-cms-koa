const { errorTypes } = require('../error/error-types')
const { getUserByName } = require('../service/user')

class UserMiddleware {
  async verifyUserSignup(ctx, next) {
    const { username, password } = ctx.request.body
    // 判断是否有值或为空
    if (!username || !password) {
      ctx.emitError(errorTypes.USERNAME_OR_PASSWORD_IS_REQUIRED)
    }

    // 判断用户是否存在
    const result = await getUserByName(username)
    if (result) ctx.emitError(errorTypes.USER_ALREADY_EXISTS)

    await next()
  }

  async verifyUserEnable(ctx, next) {
    const { role_id, enable } = ctx.request.query
    const { id } = ctx.request.params

    if (role_id === undefined || enable === undefined || id === undefined) {
      ctx.emitError(errorTypes.MISSING_PARAMETER)
    }

    if (parseInt(role_id) === 1) ctx.emitError(errorTypes.UNABLE_TO_DISABLE)

    await next()
  }

  async verifyDeleteUser(ctx, next) {
    const { id } = ctx.request.params
    if (parseInt(id) <= 10) {
      emitError(errorTypes.PROHIBIT_DELETION)
    }
    await next()
  }
}

module.exports = new UserMiddleware()
