const fs = require('fs')

// 自动创建模型，并关联表关系
function autoCreateModule(sequelize) {
  fs.readdirSync(__dirname).forEach(fileName => {
    if (fileName === 'index.js') return
    const module = require(`./${fileName}`)
    module(sequelize)
  })

  const { User, Role, Menu } = sequelize.models

  User.belongsTo(Role, {
    foreignKey: 'role_id',
    as: 'user_role'
  })

  Menu.hasMany(Menu, {
    foreignKey: 'parent_id',
    as: 'children'
  })
}

module.exports = {
  autoCreateModule
}
