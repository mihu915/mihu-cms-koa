const { getUserInfoById } = require('../service/user')
class userController {
  async userInfo(ctx, next) {
    const { id } = ctx.user

    const result = await getUserInfoById(id)

    ctx.body = {
      code: 200,
      data: result,
      message: '获取用户信息成功'
    }
  }

  async createNewUser(ctx, next){
    
  }
}

module.exports = new userController()
