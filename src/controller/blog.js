const {
  createStyle,
  getStyleList,
  alterStyle,
  deleteStyle,
  editorConfig,
  getConfig
} = require('../service/blog')

class BlogController {
  async getBlogConfig(ctx) {
    const result = await getConfig()

    ctx.body = {
      code: 200,
      data: result,
      message: '获取配置成功'
    }
  }

  async editorBlogConfig(ctx) {
    const config = ctx.request.body
    await editorConfig(config)
    ctx.body = {
      code: 200,
      message: '编辑成功'
    }
  }

  async createBlogStyle(ctx, next) {
    const styleInfo = ctx.request.body
    await createStyle(styleInfo)
    ctx.body = {
      code: '200',
      message: '创建成功'
    }
  }

  async getBlogStyleList(ctx) {
    const option = ctx.request.body
    const result = getStyleList(option)

    ctx.body = {
      code: 200,
      data: result,
      message: '查询风格列表成功'
    }
  }

  async alterBlogStyle(ctx) {
    const { id } = ctx.request.params
    const styleInfo = ctx.request.body
    await alterStyle(id, styleInfo)
    ctx.body = {
      code: 200,
      message: '修改风格成功'
    }
  }

  async deleteBlogStyle(ctx) {
    const { id } = ctx.request.params
    await deleteStyle(id)
    ctx.body = {
      code: 200,
      message: '删除风格成功'
    }
  }
}

module.exports = new BlogController()
