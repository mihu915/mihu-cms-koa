const { uploadConfig } = require('../utils/upload-config')
const { errorTypes } = require('../error/error-types')
class UploadMiddleware {
  async verifyUploadIcon(ctx, next) {
    const upload = uploadConfig('/icon')

    const err = await upload
      .single('icon')(ctx, next)
      .then((res) => res)
      .catch((err) => err)

    if (err) {
      ctx.emitError(err)
    }
  }
}

module.exports = new UploadMiddleware()
