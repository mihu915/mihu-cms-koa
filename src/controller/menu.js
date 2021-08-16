const { createMenu } = require('../service/menu')

class MenuController {
  async CreateMenu(ctx, next) {
    // await createMenu()
    ctx.body = {
      code: 200,
      message: '创建菜单成功'
    }
  }
}

module.exports = new MenuController()
