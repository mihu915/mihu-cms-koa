const fs = require('fs')

function autoCreateModule(sequelize) {
  fs.readdirSync(__dirname).forEach((fileName) => {
    if (fileName === 'index.js' || fileName === 'hooks.js') return
    const module = require(`./${fileName}`)
    module(sequelize)
  })

  const { User, Role, Menu } = sequelize.models

  User.belongsTo(Role, {
    foreignKey: 'role_id',
    as: 'user_role'
  })
}

module.exports = {
  autoCreateModule
}
