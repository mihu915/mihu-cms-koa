const { sequelize } = require('../app/database')
const { BlogInfos, BlogMenu } = sequelize.models

class BlogService {
  // 编辑博客配置
  async editorInfos(config) {
    const result = await BlogInfos.findAll()
      .then(res => {
        return res
      })
      .catch(err => {
        throw err
      })

    if (!result.length) {
      await BlogInfos.create(config)
        .then(res => {
          return res
        })
        .catch(err => {
          throw err
        })
    } else {
      const id = result[0].id
      await BlogInfos.update(config, {
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
    }
  }

  async getInfos() {
    const result = await BlogInfos.findAll()
      .then(res => {
        return res[0]
      })
      .catch(err => {
        throw err
      })

    return result
  }

  // 获取菜单列表
  async getMenuList() {
    const result = await BlogMenu.findAll()
      .then(async res => {
        const total_count = await BlogMenu.count()
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


  // 创建博客菜单
  async createMenu(blogMenu) {
    const result = await BlogMenu.create(blogMenu)
      .then(res => {
        return res
      })
      .catch(err => {
        throw err
      })

    return result
  }
}

module.exports = new BlogService()
