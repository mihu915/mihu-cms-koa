const { uploadConfig } = require('../utils/upload-config')
const { errorTypes } = require('../error/error-types')

class UploadMiddleware {
  // uploadConfig方法返回upload中间件实例

  async setUploadConfig(ctx, next) {
    let field
    switch (ctx.path) {
      case '/files/cover':
        field = 'cover'
        break
      case '/files/avatar':
        field = 'avatar'
        break
    }

    const upload = await uploadConfig()

    // 监听error，并处理错误
    const err = await upload
      .single(field)(ctx, next)
      .then((res) => res)
      .catch((err) => err)

    if (err) {
      ctx.emitError(errorTypes.PARAMETER_IS_NOT_LEGAL)
    }
  }
}

module.exports = new UploadMiddleware()
