const {
  userPageList,
  createUser,
  getUserInfoById,
  switchUserEnable,
  deleteUserById,
  alterUserInfoById
} = require('../service/user.service')

class userController {
  // 用户注册
  async userSignup(ctx, next) {
    await createUser(ctx.request.body)
    ctx.body = {
      code: 200,
      message: '用户创建成功'
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

  // 获取用户分页列表
  async getUserList(ctx, next) {
    const result = await userPageList(ctx.request.body)
    ctx.body = {
      code: 200,
      data: result,
      message: '获取用户列表成功'
    }
  }

  // 获取用户基本信息
  async userInfo(ctx, next) {
    const { id } = ctx.user
    const result = await getUserInfoById(id)

    ctx.body = {
      code: 200,
      data: result,
      message: '获取用户信息成功'
    }
  }

  // 修改用户信息
  async alterUserInfo(ctx, next) {
    const { id } = ctx.request.params
    await alterUserInfoById(id, ctx.request.body)
    ctx.body = {
      code: 200,
      message: '修改用户信息成功'
    }
  }
}

module.exports = new userController()
