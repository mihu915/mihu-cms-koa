const {
  editorBlogInfos,
  getBlogInfos,
  getBlogMenuList,
  createBlogMenu,
  editBlogMenu,
  deleteBlogMenu,
  switchBlogMenuStatus
} = require('../controller/blog.controller')
const { verifyAuth } = require('../middleware/auth.middleware')

const Router = require('koa-router')

const blogRouter = new Router({ prefix: '/blog' })

// 获取博客菜单列表
blogRouter.post('/menu/list', verifyAuth, getBlogMenuList)

// 创建博客菜单
blogRouter.post('/menu', verifyAuth, createBlogMenu)

// 修改博客菜单信息
blogRouter.patch('/menu/:id', verifyAuth, editBlogMenu)

blogRouter.delete('/menu/:id', verifyAuth, deleteBlogMenu)

// 获取博客配置信息
blogRouter.get('/infos', verifyAuth, getBlogInfos)

// 切换博客菜单状态
blogRouter.get('/menu/enable/:id', verifyAuth, switchBlogMenuStatus)

// 编辑配置信息
blogRouter.post('/infos', verifyAuth, editorBlogInfos)

module.exports = blogRouter
