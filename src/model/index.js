const fs = require('fs')
const { NODE_ENV } = require('../app/config')
const { logger } = require('../app/logger')
// 自动创建目录下所有模型
const autoCreateModel = async sequelize => {
  const modelFile = fs.readdirSync(__dirname)

  modelFile.forEach(fileName => {
    if (fileName === 'index.js') return
    const createModel = require(`./${fileName}`)
    createModel(sequelize)
  })

  const { User, Role, Menu, Write, WriteTag, WriteRelateTag } = sequelize.models

  // user关联role 一对一
  User.belongsTo(Role, {
    foreignKey: 'role_id',
    as: 'user_role'
  })

  // menu自关联一对多
  Menu.hasMany(Menu, {
    foreignKey: 'parent_id',
    as: 'children'
  })

  // 多对多关联
  WriteTag.belongsToMany(Write, {
    through: WriteRelateTag,
    foreignKey: 'tag_id',
    otherKey: 'write_id'
  })

  Write.belongsToMany(WriteTag, {
    through: WriteRelateTag,
    foreignKey: 'write_id',
    otherKey: 'tag_id',
    as: 'write_tag'
  })

  // 开发环境则同步表
  if (NODE_ENV === 'development') {
    await sequelize.sync({ alert: true })
    logger.info('表模型已同步')
  }
}

module.exports = {
  autoCreateModel
}
