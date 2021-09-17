const {
  insertWrite,
  selectWrite,
  updateWriteById,
  deleteWriteById
} = require('../service/write')

class WriteController {
  async createWrite(ctx, next) {
    const info = ctx.request.body

    await insertWrite(info)
    ctx.body = {
      code: 200,
      message: '创建文章成功'
    }
  }

  async getWriteList(ctx) {
    const option = ctx.request.body
    const result = await selectWrite(option)
    ctx.body = {
      code: 200,
      data: result,
      message: '查询文章列表成功'
    }
  }

  // 修改
  async alterWrite(ctx) {
    const { id } = ctx.request.params
    const info = ctx.request.body
    await updateWriteById(id, info)
    ctx.body = {
      code: 200,
      message: '保存成功'
    }
  }

  // 删除
  async deleteWrite(ctx) {
    const { id } = ctx.request.params
    await deleteWriteById(id)
    ctx.body = {
      code: 200,
      message: '保存成功'
    }
  }
}

module.exports = new WriteController()
