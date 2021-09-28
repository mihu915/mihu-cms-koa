const Router = require('koa-router')
const blogRouter = new Router({ prefix: '/blog' })

const {
  createBlogStyle,
  getBlogStyleList,
  deleteBlogStyle,
  alterBlogStyle,
  editorBlogConfig,
  getBlogConfig
} = require('../controller/blog')
const { verifyAuth } = require('../middleware/auth')
const { handleListParam } = require('../middleware/verify-params')

blogRouter.get('/config', verifyAuth, getBlogConfig)

// 编辑配置
blogRouter.post('/config', verifyAuth, editorBlogConfig)

// 添加风格
blogRouter.post('/style', verifyAuth, createBlogStyle)

// 修改风格
blogRouter.patch('/style/:id', verifyAuth, alterBlogStyle)

// 查询风格列表
blogRouter.post('/style/list', verifyAuth, handleListParam, getBlogStyleList)

// 删除风格
blogRouter.delete('/style/:id', verifyAuth, deleteBlogStyle)

module.exports = blogRouter
