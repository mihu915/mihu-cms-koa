const { Op, sequelize } = require('../app/database')
const { handleWhere } = require('../utils/handle-where')

const { Write, WriteTag } = sequelize.models

class WriteService {
  // 新建文章
  async insertWrite(info) {
    await Write.create(info)
      .then(res => {
        return res
      })
      .catch(err => {
        throw err
      })
  }

  // 查询文章列表
  async selectWrite(option) {
    const { offset, limit, title, description, created } = option
    const whereRule = {
      title: {
        type: 'like',
        value: title
      },
      description: {
        type: 'like',
        value: description
      },
      created: {
        type: 'interval',
        value: created
      }
    }
    const where = handleWhere(whereRule, Op)
    const result = await Write.findAll({
      offset,
      limit,
      where,
      order: [['created', 'DESC']]
    })
      .then(async res => {
        const total_count = await Write.count({ where })
        return {
          list: res,
          total_count
        }
      })
      .catch(err => {
        throw err
      })

    return result
  }

  // 更新文章表内容
  async updateWriteById(id, info) {
    const result = await Write.update(info, {
      where: {
        id
      }
    })
      .then(res => {
        return res
      })
      .catch(err => {
        throw err
      })

    return result
  }

  // 根据id删除
  async deleteWriteById(id) {
    const result = await Write.destroy({
      where: {
        id
      }
    })
      .then(res => {
        return res
      })
      .catch(err => {
        throw err
      })

    return result
  }

  // 创建文章标签
  async addWriteTag(data) {
    await WriteTag.create(data)
      .then()
      .catch(err => {
        throw err
      })
  }

  async alertWriteTagById(id, data) {
    await WriteTag.update(data, {
      where: {
        id
      }
    }).catch(err => {
      throw err
    })
  }

  async deleteWriteTagById(id) {
    await WriteTag.destroy({
      where: {
        id
      }
    }).catch(err => {
      throw err
    })
  }

  async getWriteTag() {
    const result = await WriteTag.findAll()
      .then(async res => {
        const total_count = await WriteTag.count()
        return {
          list: res,
          total_count
        }
      })
      .catch(err => {
        throw err
      })
    return result
  }
}

module.exports = new WriteService()
