const { uploadConfig } = require('../utils/upload-config')
const { errorTypes } = require('../error/error-types')
class UploadMiddleware {
  async verifyUploadIcon(ctx, next) {
    // uploadConfig方法返回upload中间件实例，参数一：额外的文件路径
    const upload = uploadConfig('/avatar')
    const field = 'avatar'

    // 监听error，并处理错误
    const err = await upload
      .single(field)(ctx, next)
      .then((res) => res)
      .catch((err) => err)

    console.log(err, '----文件上传')
    if (err) {
      if (err.storageErrors && err.storageErrors.length) ctx.emitError(errorTypes.PARAMETER_IS_NOT_LEGAL)
    }
  }
}

module.exports = new UploadMiddleware()
