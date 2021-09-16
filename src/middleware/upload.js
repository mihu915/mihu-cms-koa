const { uploadConfig } = require('../utils/upload-config')
const { errorTypes } = require('../error/error-types')

class UploadMiddleware {
  async verifyUploadIcon(ctx, next) {
    // uploadConfig方法返回upload中间件实例，参数一：额外的文件路径
    const upload = await uploadConfig('/avatar')
    const field = 'avatar'

    // 监听error，并处理错误
    const err = await upload
      .single(field)(ctx, next)
      .then((res) => res)
      .catch((err) => err)

    if (err) {
      if (err.field && field !== err.field) {
        ctx.emitError(errorTypes.PARAMETER_IS_NOT_LEGAL)
      } else {
        ctx.emitError(err)
      }
    }
  }

  // 校验封面上传
  async verifyUploadCover(ctx, next) {
    const upload = await uploadConfig('/cover')
    const field = 'cover'
    const err = await upload
      .single(field)(ctx, next)
      .then((res) => res)
      .catch((err) => err)

    if (err) {
      if (err.field && field !== err.field) {
        ctx.emitError(errorTypes.PARAMETER_IS_NOT_LEGAL)
      } else {
        ctx.emitError(err)
      }
    }
  }
}

module.exports = new UploadMiddleware()
