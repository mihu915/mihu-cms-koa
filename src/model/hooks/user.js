function userAfterValidate(user, option) {
  if (user.isNewRecord) {
    user.realname = user.username
    user.register_time = user.created
  }
}

module.exports = {
  userAfterValidate
}
