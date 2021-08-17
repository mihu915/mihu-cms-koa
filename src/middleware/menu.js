const { createMenuRules } = require('./config')
class MenuMiddleware {
  async verifyCreateMenu(ctx, next) {
    ctx.verifyParams(createMenuRules)
    await next()
  }

}

module.exports = new MenuMiddleware()
