const { md5Password } = require('../utils/handle-password')

const  userHook = {
  userBeforeCreate(instance, option) {
    // 将密码md5加密处理
    instance.password = md5Password(instance.password)
  },

  // 校验之前
  userBeforeValidate() {},

  // 校验完成之后
  userAfterValidate(instance, option) {}
}

module.exports = {
  ...userHook
}
