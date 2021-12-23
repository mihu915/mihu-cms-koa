const { Op, sequelize } = require('../app/database')
const { handleWhere } = require('../utils/handle-where')

const { Write, WriteTag, WriteRelateTag } = sequelize.models

class WriteService {
  // 新建文章
  async insertWrite(info) {
    const newWrite = await Write.create(info)
      .then(res => {
        return res
      })
      .catch(err => {
        throw err
      })
    if (info['write_tag']) {
      const tags = await WriteTag.findAll({
        where: { id: info['write_tag'] }
      })

      await newWrite.setWrite_tag(tags, { hooks: false })
    }
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
      order: [['created', 'DESC']],
      include: {
        model: sequelize.models.WriteTag,
        as: 'write_tag',
        attributes: ['id']
      }
    })
      .then(async res => {
        const result = res.map(item => {
          const newTagData = item.dataValues.write_tag.map(tagData => {
            return tagData['id']
          })
          item.dataValues.write_tag = newTagData
          return item.dataValues
        })
        const total_count = await Write.count({ where })

        return {
          list: result,
          total_count
        }
      })
      .catch(err => {
        throw err
      })

    return result
  }

  // 更新文章信息内容
  async updateWriteById(id, info) {
    if (info['write_tag']) {
      const tags = await WriteTag.findAll({
        where: {
          id: info['write_tag']
        }
      })
      await Write.findByPk(id)
        .then(res => {
          res.update(info)
          res.setWrite_tag(tags)
        })
        .catch(err => {
          throw err
        })
    } else {
      await Write.update(info, {
        where: {
          id
        }
      }).catch(err => {
        throw err
      })
    }

    return true
  }

  // 根据id获取单个文章的数据
  async getWriteById(id) {
    const result = await Write.findAll({
      where: {
        id
      }
    }).then(res => {
      return res[0]
    })
    return result
  }

  // 根据id删除文章
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

    await WriteRelateTag.destroy({
      where: {
        write_id: id
      },
      hooks: false
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

  // 修改标签
  async alertWriteTagById(id, data) {
    await WriteTag.update(data, {
      where: {
        id
      }
    }).catch(err => {
      throw err
    })
  }

  // 删除标签
  async deleteWriteTagById(id) {
    await WriteTag.destroy({
      where: {
        id
      }
    }).catch(err => {
      throw err
    })

    await WriteRelateTag.destroy({
      where: {
        tag_id: id
      },
      hooks: false
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
