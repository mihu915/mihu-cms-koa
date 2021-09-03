class RoleMiddleware {
  // 处理获取用户角色列表的参数
  async handleRoleListParam(ctx, next) {
    ctx.request.query.offset = parseInt(ctx.request.query.offset)
    ctx.request.query.limit = parseInt(ctx.request.query.limit)

    if (!ctx.request.query.offset) ctx.request.query.offset = 0
    if (!ctx.request.query.limit) ctx.request.query.limit = 10

    await next()
  }
}

module.exports = new RoleMiddleware()
