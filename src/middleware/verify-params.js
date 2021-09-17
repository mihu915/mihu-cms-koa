const { errorTypes } = require('../error/error-types')
class VerifyParams {
  // 校验删除菜单的id
  async verifyDeleteMenu(ctx, next) {
    const { id } = ctx.request.params
    if (id <= 32) ctx.emitError(errorTypes.PROHIBIT_DELETION)
    await next()
  }

  // 删除角色数据校验
  async verifyDeleteRoleId(ctx, next) {
    const { id } = ctx.request.params
    if (id <= 3) ctx.emitError(errorTypes.PROHIBIT_DELETION)
    await next()
  }

  // 处理获取列表的参数
  async handleListParam(ctx, next) {
    ctx.request.body.offset = parseInt(ctx.request.body.offset)
    ctx.request.body.limit = parseInt(ctx.request.body.limit)

    if (!ctx.request.body.offset && ctx.request.body.offset !== 0) {
      ctx.request.body.offset = 0
    }
    if (!ctx.request.body.limit && ctx.request.body.limit !== 0) {
      ctx.request.body.limit = 10
    }

    if (ctx.request.body.created) {
      if (Array.isArray(ctx.request.body.created)) {
        ctx.request.body.created.map((item, index, array) => {
          if (item + ''.length > ctx.request.body.$time + ''.length) {
            array[index] = parseInt(item) / 1000
          }
        })
      } else if (
        ctx.request.body.created + ''.length >
        ctx.request.body.$time + ''.length
      ) {
        ctx.request.body.created = parseInt(ctx.request.body.created) / 1000
      }
    }

    await next()
  }
}

module.exports = new VerifyParams()
