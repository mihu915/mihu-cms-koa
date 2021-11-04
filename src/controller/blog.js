const {
  createStyle,
  getStyleList,
  alterStyle,
  deleteStyle,
  editorInfos,
  getInfos
} = require('../service/blog')

class BlogController {
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
