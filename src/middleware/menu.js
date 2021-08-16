const { createMenuRule } = require('./config')
class MenuMiddleware {
  async verifyCreateMenu(ctx, next) {
    ctx.verifyParams(createMenuRule, null)

    await next()
  }
}

module.exports = new MenuMiddleware()
