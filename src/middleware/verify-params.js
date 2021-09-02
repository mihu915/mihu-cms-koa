const { errorTypes } = require('../error/error-types')
const { getMenuById } = require('../service/menu')
class VerifyParams {
  // 校验删除菜单的id
  async verifyDeleteMenu(ctx, next) {
    const { id } = ctx.request.params
    if (id >= 25 && id <= 28) ctx.emitError(errorTypes.PROHIBIT_DELETION)
    await next()
  }

  async verifyMenuExist(ctx, next) {
    const { id } = ctx.request.params
    const result = await getMenuById(id)
    if (!result) ctx.emitError(errorTypes.CONTENT_DOES_NOT_EXIST)
    await next()
  }
}

module.exports = new VerifyParams()
