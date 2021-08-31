const { registerUserModel } = require('./user.model')

function registerModule(sequelize) {
  const User = registerUserModel(sequelize)

  return {
    User
  }
}

module.exports = {
  registerModule
}
