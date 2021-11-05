const {
  editorInfos,
  getInfos,
  getMenuList,
  createMenu
} = require('../service/blog')

class BlogController {
  // 创建博客菜单
  async createBlogMenu(ctx) {
    const blogMenu = ctx.request.body
    const result = await createMenu(blogMenu)
    ctx.body = {
      code: 200,
      message: '创建菜单成功'
    }
  }

  // 获取博客菜单列表
  async getBlogMenuList(ctx) {
    const data = await getMenuList()
    ctx.body = {
      code: 200,
      data,
      message: '获取菜单成功'
    }
  }

  async getBlogInfos(ctx) {
    const infos = await getInfos()
    ctx.body = {
      code: 200,
      data: infos,
      message: '获取配置成功'
    }
  }

  async editorBlogInfos(ctx) {
    const infos = ctx.request.body
    await editorInfos(infos)
    ctx.body = {
      code: 200,
      message: '编辑成功'
    }
  }
}

module.exports = new BlogController()
