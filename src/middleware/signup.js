class SignupMiddleware {
  async verifySignup(ctx, next) {
    const rules = {
      params: {
        username: {
          type: 'string',
          required: true
        },
        password: {
          type: 'string'
        }
      }
    }
    ctx.verifyParams(rules)

    await next()
  }
}

module.exports = new SignupMiddleware()
