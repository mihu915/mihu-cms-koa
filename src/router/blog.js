const Router = require('koa-router')
const blogRouter = new Router({ prefix: '/blog' })

const {
  createBlogStyle,
  getBlogStyleList,
  deleteBlogStyle,
  alterBlogStyle,
  editorBlogInfos,
  getBlogInfos
} = require('../controller/blog')
const { verifyAuth } = require('../middleware/auth')
const { handleListParam } = require('../middleware/verify-params')

// 获取博客配置信息
blogRouter.get('/infos', verifyAuth, getBlogInfos)

// 编辑配置
blogRouter.post('/infos', verifyAuth, editorBlogInfos)

// 添加风格
blogRouter.post('/style', verifyAuth, createBlogStyle)

// 修改风格
blogRouter.patch('/style/:id', verifyAuth, alterBlogStyle)

// 查询风格列表
blogRouter.post('/style/list', verifyAuth, handleListParam, getBlogStyleList)

// 删除风格
blogRouter.delete('/style/:id', verifyAuth, deleteBlogStyle)

module.exports = blogRouter
