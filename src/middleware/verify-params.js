const { errorTypes } = require('../error/error-types')
const { getMenuById } = require('../service/menu')
class VerifyParams {
  // 校验删除菜单的id
  async verifyDeleteMenu(ctx, next) {
    const { id } = ctx.request.params
    if (id <= 28) ctx.emitError(errorTypes.PROHIBIT_DELETION)
    await next()
  }

  async verifyDeleteRoleId(ctx, next) {
    const { id } = ctx.request.params
    if (id <= 3) ctx.emitError(errorTypes.PROHIBIT_DELETION)
    await next()
  }

  // 处理获取用户角色列表的参数
  async handleListParam(ctx, next) {
    ctx.request.query.offset = parseInt(ctx.request.query.offset)
    ctx.request.query.limit = parseInt(ctx.request.query.limit)
    console.log(ctx.request.query)

    if (!ctx.request.query.offset && ctx.request.query.offset !== 0) {
      ctx.request.query.offset = undefined
    }
    if (!ctx.request.query.limit && ctx.request.query.limit !== 0) {
      ctx.request.query.limit = undefined
    }
    console.log(ctx.request.query)
    await next()
  }
}

module.exports = new VerifyParams()
