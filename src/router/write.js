const Router = require('koa-router')
const {
  createWrite,
  getWriteList,
  alterWrite,
  deleteWrite
} = require('../controller/write')

const { verifyAuth } = require('../middleware/auth.middleware')
const { handleListParam } = require('../middleware/verify-params')

const writeRouter = new Router({ prefix: '/write' })

// 查询文章列表
writeRouter.post('/list', verifyAuth, handleListParam, getWriteList)

// 添加文章
writeRouter.post('/', verifyAuth, createWrite)

// 修改文章信息
writeRouter.patch('/:id', verifyAuth, alterWrite)

// 删除文章信息
writeRouter.delete('/:id', verifyAuth, deleteWrite)

module.exports = writeRouter
