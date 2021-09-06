const { errorTypes } = require('../error/error-types')
const { getMenuById } = require('../service/menu')
class VerifyParams {
  // 校验删除菜单的id
  async verifyDeleteMenu(ctx, next) {
    const { id } = ctx.request.params
    if (id >= 25 && id <= 28) ctx.emitError(errorTypes.PROHIBIT_DELETION)
    await next()
  }

  // 校验菜单是否存在
  async verifyMenuExist(ctx, next) {
    const { id } = ctx.request.params
    const result = await getMenuById(id)
    if (!result) ctx.emitError(errorTypes.CONTENT_DOES_NOT_EXIST)
    await next()
  }

  // 处理获取用户角色列表的参数
  async handleListParam(ctx, next) {
    ctx.request.query.offset = parseInt(ctx.request.query.offset)
    ctx.request.query.limit = parseInt(ctx.request.query.limit)

    if (!ctx.request.query.offset) ctx.request.query.offset = 0
    if (!ctx.request.query.limit) ctx.request.query.limit = 10

    await next()
  }
}

module.exports = new VerifyParams()
