const Router = require('koa-router')
const blogRouter = new Router({ prefix: '/blog' })

const {
  editorBlogInfos,
  getBlogInfos,
  getBlogMenuList
} = require('../controller/blog')
const { verifyAuth } = require('../middleware/auth')
const { handleListParam } = require('../middleware/verify-params')

// 获取博客菜单列表
blogRouter.post('/menu/list', verifyAuth, getBlogMenuList)

// 获取博客配置信息
blogRouter.get('/infos', verifyAuth, getBlogInfos)

// 编辑配置信息
blogRouter.post('/infos', verifyAuth, editorBlogInfos)

module.exports = blogRouter
