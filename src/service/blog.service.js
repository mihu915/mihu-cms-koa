const { Op, sequelize } = require('../app/database')

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

  // 获取信息
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

  // 切换菜单状态
  async switchStatus(status, menu_id) {
    await BlogMenu.update(
      {
        enable: status
      },
      {
        where: {
          id: menu_id
        }
      }
    )
      .then(res => {
        return res
      })
      .catch(err => {
        throw err
      })
  }
  // 编辑菜单信息
  async editMenu(menu, id) {
    await BlogMenu.update(menu, {
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

  // 删除菜单
  async deleteMenu(id) {
    await BlogMenu.destroy({
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

  // 获取博客菜单列表
  async getMenuList() {
    const result = await BlogMenu.findAll({
      order: [['sort', 'ASC']]
    })
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
