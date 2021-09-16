const { sequelize, Op } = require('../app/database')
const { handleWhere } = require('../utils/handle-where')
const { Essay } = sequelize.models

class EssayService {
  // 新建文章
  async insertEssay(info) {
    const result = await Essay.create(info)
      .then((res) => {
        return res
      })
      .catch((err) => {
        throw err
      })
  }

  async selectEssay(option) {
    const { offset, limit, title, created } = option
    const whereRule = {
      title: {
        type: 'like',
        value: title
      },
      created: {
        type: 'interval',
        value: created
      }
    }
    const where = handleWhere(whereRule, Op)
    const result = await Essay.findAll({
      offset,
      limit,
      where,
      order: [['created', 'DESC']]
    })
      .then(async (res) => {
        const total_count = await Essay.count({ where })
        return {
          list: res,
          total_count
        }
      })
      .catch((err) => {
        throw err
      })

    return result
  }

  // 更新文章表内容
  async updateEssayById(id, info) {
    const result = await Essay.update(info, {
      where: {
        id
      }
    })
      .then((res) => {
        return res
      })
      .catch((err) => {
        throw err
      })

    return result
  }

  // 根据id删除
  async deleteEssayById(id) {
    const result = await Essay.destroy({
      where: {
        id
      }
    }).then((res) => {
      return res
      
    }).catch(err => {
      throw err
    })

    return result
  }
}

module.exports = new EssayService()
