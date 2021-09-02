const { getMenuById } = require('../service/menu')

class MenuMiddleware {
  // 处理参数
  async handleParams(ctx, next) {
    ctx.verifyParams({
      title: true,
      icon: true,
      type: true,
      url: true,
      parent: true,
      sort: {
        defaultValue: 0
      }
    })
    await next()
  }
  // 创建菜单
  async verifyCreateMenu(ctx, next) {
    await next()
  }

  async verifyDeleteMenu(ctx, next) {
    // 判断内容是否存在
    ctx.verifyParams()
    await next()
  }

  async verifyAlterMenu(ctx, next) {
    await next()
  }
}

module.exports = new MenuMiddleware()
