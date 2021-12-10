const fs = require('fs')

// 自动创建目录下所有模型
const autoCreateModel = sequelize => {
  const modelFile = fs.readdirSync(__dirname)

  modelFile.forEach(fileName => {
    if (fileName === 'index.js') return
    const createModel = require(`./${fileName}`)
    createModel(sequelize)
  })

  const { User, Role, Menu } = sequelize.models

  // user关联role
  User.belongsTo(Role, {
    foreignKey: 'role_id',
    as: 'user_role'
  })

  // menu自关联
  Menu.hasMany(Menu, {
    foreignKey: 'parent_id',
    as: 'children'
  })
}

module.exports = {
  autoCreateModel
}
