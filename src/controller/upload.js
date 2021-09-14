const { DOMAIN_NAME, APP_PORT } = require('../app/config')

class UploadController {
  async uploadIcon(ctx, next) {
    const fileName = ctx.req.file.filename

    const avatar = DOMAIN_NAME + ':' + APP_PORT + '/avatar/' + fileName

    ctx.body = {
      code: 200,
      data: {
        avatar
      },
      message: '图片上传成功~'
    }
  }
}

module.exports = new UploadController()
