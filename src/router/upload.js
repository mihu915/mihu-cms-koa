const Router = require('koa-router')
const { uploadIcon } = require('../controller/upload')
const { verifyUploadIcon } = require('../middleware/upload')
const uploadRouter = new Router({ prefix: '/files' })

// 上传头像
uploadRouter.post('/avatar', verifyUploadIcon, uploadIcon)

module.exports = uploadRouter
