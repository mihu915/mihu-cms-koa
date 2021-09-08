const {
  userList,
  createUser,
  getUserInfoById,
  switchUserEnable,
  deleteUserById
} = require('../service/user')

class userController {
  // 用户注册
  async userSignup(ctx, next) {
    await createUser(ctx.request.body)
    ctx.body = {
      code: 200,
      message: '注册成功'
    }
  }

  async deleteUser(ctx) {
    await deleteUserById(ctx.request.params.id)
    ctx.body = {
      code: 200,
      message: '删除用户成功'
    }
  }

  // 切换用户状态
  async userEnable(ctx, next) {
    let message
    const params = {
      enable: ctx.request.query.enable,
      id: ctx.request.params.id
    }
    await switchUserEnable(params)

    if (parseInt(params.enable) === 1) {
      message = '启用用户成功'
    } else {
      message = '禁用用户成功'
    }
    ctx.body = {
      code: 200,
      message
    }
  }

  // 获取用户列表
  async getUserList(ctx, next) {
    const option = ctx.request.query
    const result = await userList(option)
    ctx.body = {
      code: 200,
      data: result,
      message: '获取用户列表成功'
    }
  }

  async userInfo(ctx, next) {
    const { id } = ctx.user

    const result = await getUserInfoById(id)

    ctx.body = {
      code: 200,
      data: result,
      message: '获取用户信息成功'
    }
  }

  async createNewUser(ctx, next) {}
}

module.exports = new userController()
