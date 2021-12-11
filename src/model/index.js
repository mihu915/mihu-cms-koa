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

  const { User, Role, Menu, Write, WriteTag } = sequelize.models

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

  Write.hasMany(WriteTag, {
    foreignKey: 'tag_id'
  })

  if (NODE_ENV === 'development') {
    await sequelize.sync({ alert: true })
    logger.info('表模型已同步')
  }
}

module.exports = {
  autoCreateModel
}
