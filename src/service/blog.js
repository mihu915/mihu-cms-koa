const { sequelize } = require('../app/database')
const { BlogStyle, BlogInfos } = sequelize.models

class BlogService {
  // 编辑博客配置
  async editorInfos(config) {
    const result = await BlogInfos.findAll()
      .then((res) => {
        return res
      })
      .catch((err) => {
        throw err
      })

    if (!result.length) {
      await BlogInfos.create(config)
        .then((res) => {
          return res
        })
        .catch((err) => {
          throw err
        })
    } else {
      const id = result[0].id
      await BlogInfos.update(config, {
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
    }
  }

  async getInfos() {
    const result = await BlogInfos.findAll()
      .then((res) => {
        return res[0]
      })
      .catch((err) => {
        throw err
      })

    return result
  }

  async createStyle(info) {
    const result = await BlogStyle.create(info)
      .then((res) => {
        return res
      })
      .catch((err) => {
        throw err
      })
    return result
  }

  // 获取列表
  async getStyleList(option) {
    const { limit, offset } = option
    const result = await BlogStyle.findAll({
      limit,
      offset,
      order: [['created', 'DESC']]
    })
      .then(async (res) => {
        const total_count = await BlogStyle.count()
        return { list: res, total_count }
      })
      .catch((err) => {
        throw err
      })
    return result
  }

  async alterStyle(id, info) {
    const result = BlogStyle.update(info, {
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
  }

  async deleteStyle(id) {
    const result = await BlogStyle.destroy({
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
  }
}

module.exports = new BlogService()
