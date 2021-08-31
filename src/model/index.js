const { registerUserModel } = require('./user.model')
const { userAfterValidate } = require('./hooks')

function registerModule(sequelize) {
  const User = registerUserModel(sequelize)
  // User.afterValidate('userHookBefore', userAfterValidate)

  return {
    User
  }
}

module.exports = {
  registerModule
}
