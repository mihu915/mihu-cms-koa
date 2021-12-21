const {
  insertWrite,
  selectWrite,
  updateWriteById,
  deleteWriteById,
  addWriteTag,
  deleteWriteTagById,
  alertWriteTagById,
  getWriteTag,
  getWriteById
} = require('../service/write.service')

class WriteController {
  async createWrite(ctx) {
    const info = ctx.request.body
    info.content = ''
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
      message: '删除成功'
    }
  }

  // 创建文章标签
  async createWriteTag(ctx) {
    await addWriteTag(ctx.request.body)
    ctx.body = {
      code: 200,
      message: '创建标签成功'
    }
  }

  // 查询文章列表
  async getWriteTagList(ctx) {
    const result = await getWriteTag()
    ctx.body = {
      code: 200,
      data: result,
      message: '查询标签成功'
    }
  }

  // 获取单个文章数据
  async getWriteData(ctx) {
    const { id } = ctx.request.params
    const data = await getWriteById(id)
    ctx.body = {
      code: 200,
      data,
      message: '查询成功'
    }
  }

  async alterWriteTag(ctx) {
    const { id } = ctx.request.params
    await alertWriteTagById(id, ctx.request.body)
    ctx.body = {
      code: 200,
      message: '修改标签成功'
    }
  }

  async deleteWriteTag(ctx) {
    const { id } = ctx.request.params
    await deleteWriteTagById(id)
    ctx.body = {
      code: 200,
      message: '删除标签成功'
    }
  }
}

module.exports = new WriteController()
