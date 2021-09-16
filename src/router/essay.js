const Router = require('koa-router')
const {
  createEssay,
  getEssayList,
  alterEssay,
  deleteEssay
} = require('../controller/essay')
const { verifyAuth } = require('../middleware/auth')
const { handleListParam } = require('../middleware/verify-params')
const essayRouter = new Router({ prefix: '/essay' })

// 查询文章列表
essayRouter.post('/list', verifyAuth, handleListParam, getEssayList)

// 添加文章
essayRouter.post('/', verifyAuth, createEssay)

// 修改文章信息
essayRouter.patch('/:id', verifyAuth, alterEssay)

// 删除文章信息
essayRouter.delete('/:id', verifyAuth, deleteEssay)

module.exports = essayRouter
