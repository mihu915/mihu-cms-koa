const {
  editorInfos,
  getInfos,
  getMenuList,
  createMenu,
  editMenu,
  deleteMenu,
  switchStatus
} = require('../service/blog.service')

class BlogController {
  // 创建博客菜单
  async createBlogMenu(ctx) {
    const blogMenu = ctx.request.body
    const result = await createMenu(blogMenu)
    ctx.body = {
      code: 200,
      message: '创建博客菜单成功'
    }
  }

  async editBlogMenu(ctx) {
    const menu = ctx.request.body
    const { id } = ctx.request.params
    const result = await editMenu(menu, id)
    ctx.body = {
      code: 200,
      message: '修改博客菜单成功'
    }
  }

  async switchBlogMenuStatus(ctx) {
    const { enable } = ctx.request.query
    const { id } = ctx.request.params

    await switchStatus(enable, id)
    ctx.body = {
      code: 200,
      message: parseInt(enable) ? '启用菜单成功' : '禁用菜单成功'
    }
  }

  // 删除博客菜单
  async deleteBlogMenu(ctx) {
    const { id } = ctx.request.params
    await deleteMenu(id)
    ctx.body = {
      code: 200,
      message: '删除博客菜单成功'
    }
  }

  // 获取博客菜单列表
  async getBlogMenuList(ctx) {
    const data = await getMenuList()
    ctx.body = {
      code: 200,
      data,
      message: '获取博客菜单成功'
    }
  }

  // 获取博客配置信息
  async getBlogInfos(ctx) {
    const infos = await getInfos()
    ctx.body = {
      code: 200,
      data: infos,
      message: '获取配置成功'
    }
  }

  // 编辑博客配置信息
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
