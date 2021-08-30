const { createMenuRules, deleteMenuRules } = require('./config')
const { getMenuById } = require('../service/menu')
const { errorTypes } = require('../error/error-types')
class MenuMiddleware {
  async verifyCreateMenu(ctx, next) {
    ctx.verifyParams(createMenuRules)
    await next()
  }

  async verifyDeleteMenu(ctx, next) {
    ctx.verifyParams(deleteMenuRules)
    const { id } = ctx.request.params
    // 判断内容是否存在
    const result = await getMenuById(id)
    if (!result) ctx.emitError(errorTypes.CONTENT_DOES_NOT_EXIST)

    // 判断删除数据是否为初始数据
    if (id >= 25 && id <= 28) ctx.emitError(errorTypes.CANNOT_BE_REMOVED)
    await next()
  }

  async verifyAlterMenu(ctx, next){
    ctx.verifyParams(createMenuRules)
    await next()
  }
}

module.exports = new MenuMiddleware()
