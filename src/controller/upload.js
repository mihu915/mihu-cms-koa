const { DOMAIN_NAME, APP_PORT } = require('../app/config')

class UploadController {
  async uploadIcon(ctx, next) {
    const fileName = ctx.req.file.filename

    const icon = 'http://' + DOMAIN_NAME + ':' + APP_PORT + '/icon/' + fileName

    ctx.body = {
      code: 200,
      data: {
        icon
      },
      message: '图片上传成功~'
    }
  }
}

module.exports = new UploadController()
