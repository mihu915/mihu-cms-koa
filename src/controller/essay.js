const {
  insertEssay,
  selectEssay,
  updateEssayById,
  deleteEssayById
} = require('../service/essay')

class EssayController {
  async createEssay(ctx, next) {
    const info = ctx.request.body

    await insertEssay(info)
    ctx.body = {
      code: 200,
      message: '创建文章成功'
    }
  }

  async getEssayList(ctx) {
    const option = ctx.request.body
    const result = await selectEssay(option)
    ctx.body = {
      code: 200,
      data: result,
      message: '查询文章列表成功'
    }
  }

  // 修改
  async alterEssay(ctx) {
    const { id } = ctx.request.params
    const info = ctx.request.body
    await updateEssayById(id, info)
    ctx.body = {
      code: 200,
      message: '修改文章信息成功'
    }
  }

  // 删除
  async deleteEssay(ctx) {
    const { id } = ctx.request.params
    await deleteEssayById(id)
    ctx.body = {
      code: 200,
      message: '删除文章信息成功'
    }
  }
}

module.exports = new EssayController()
