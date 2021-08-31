const { User } = require('../app/database')
async function test(ctx, next) {
  const [result] = await User.update(
    {
      rule_id: 3
    },
    {
      where: {
        username: 'test123'
      }
    }
  )

  // const [result] = await User.create({
  //   username: '123hhhh',
  //   password: '123123123'
  // })
  ctx.body = {
    message: '操作成功'
  }
}

module.exports = {
  test
}
