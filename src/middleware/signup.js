class SignupMiddleware {
  async verifySignup(ctx, next) {
    const rules = {
      username: {
        type: 'string',
        required: true
      },
      password: {
        type: 'string',
        required: true
      },
      a: {
        required: true
      }
    }
    ctx.verifyParams(rules)

    await next()
  }
}

module.exports = new SignupMiddleware()
