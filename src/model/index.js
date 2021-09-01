const { registerUserModel } = require('./user.model')
const { registerRoleModel } = require('./role.model')

function registerModule(sequelize) {
  registerUserModel(sequelize)
  registerRoleModel(sequelize)

}

module.exports = {
  registerModule
}
