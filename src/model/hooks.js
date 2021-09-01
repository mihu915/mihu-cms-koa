const { md5Password } = require('../utils/handle-password')
class ModelHooks {
  userBeforeCreate(instance, option) {
    // 将密码md5加密处理
    instance.password = md5Password(instance.password)
  }

  userBeforeValidate(){
    console.log('userBeforeValidate')
  }
  // 校验完成之后
  userAfterValidate(instance, option) {}


}

module.exports = new ModelHooks()
