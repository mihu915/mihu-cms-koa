const { DOMAIN_NAME, APP_PORT } = require('../app/config')
const { errorTypes } = require('../error/error-types')
class UploadController {
  async uploadImage(ctx, next) {
    if (!ctx.req.file) ctx.emitError(errorTypes.PARAMETER_IS_NOT_LEGAL)
    const fileName = ctx.req.file.filename

    const field =
      DOMAIN_NAME + ':' + APP_PORT + ctx.path + '/' + fileName

    ctx.body = {
      code: 200,
      data: {
        [ctx.uploadField]: field
      },
      message: '上传成功'
    }
  }
}

module.exports = new UploadController()
