const {
  createWrite,
  getWriteList,
  alterWrite,
  deleteWrite,
  createWriteTag,
  alterWriteTag,
  deleteWriteTag,
  getWriteTagList,
  getWriteData
} = require('../controller/write.controller')

const Router = require('koa-router')

const { verifyAuth } = require('../middleware/auth.middleware')
const { handleListParam } = require('../middleware/handle.params.middleware')

const writeRouter = new Router({ prefix: '/write' })

// 查询文章列表
writeRouter.post('/list', verifyAuth, handleListParam, getWriteList)

// 添加文章
writeRouter.post('/', verifyAuth, createWrite)

// 修改文章信息
writeRouter.patch('/:id', verifyAuth, alterWrite)

// 删除文章信息
writeRouter.delete('/:id', verifyAuth, deleteWrite)

// 根据id获取一条文章数据
writeRouter.get('/:id', verifyAuth, getWriteData)

// 创建标签
writeRouter.post('/tag', verifyAuth, createWriteTag)

// 查询标签列表
writeRouter.post('/tag/list', verifyAuth, getWriteTagList)

// 修改标签
writeRouter.patch('/tag/:id', verifyAuth, alterWriteTag)

// 删除标签
writeRouter.delete('/tag/:id', verifyAuth, deleteWriteTag)

module.exports = writeRouter
