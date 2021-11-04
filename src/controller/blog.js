const { editorInfos, getInfos, getMenuList } = require('../service/blog')

class BlogController {
  async getBlogMenuList(ctx) {
    const data = await getMenuList()
    console.log(data)
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
