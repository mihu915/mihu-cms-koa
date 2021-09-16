const { DOMAIN_NAME, APP_PORT } = require('../app/config')
const { errorTypes } = require('../error/error-types')
class UploadController {
  async uploadIcon(ctx, next) {
    if (!ctx.req.file) ctx.emitError(errorTypes.PARAMETER_IS_NOT_LEGAL)
    const fileName = ctx.req.file.filename

    const avatar = DOMAIN_NAME + ':' + APP_PORT + '/avatar/' + fileName

    ctx.body = {
      code: 200,
      data: {
        avatar
      },
      message: '上传成功'
    }
  }

  async uploadCover(ctx, next) {
    if (!ctx.req.file) ctx.emitError(errorTypes.PARAMETER_IS_NOT_LEGAL)

    const fileName = ctx.req.file.filename
    const cover = DOMAIN_NAME + ':' + APP_PORT + '/cover/' + fileName
    ctx.body = {
      code: 200,
      data: {
        cover
      },
      message: '上传成功'
    }
  }
}

module.exports = new UploadController()
