const Router = require('koa-router')
const { uploadIcon, uploadCover } = require('../controller/upload')
const { verifyUploadIcon, verifyUploadCover } = require('../middleware/upload')
const { verifyAuth } = require('../middleware/auth')
const uploadRouter = new Router({ prefix: '/files' })

// 上传头像
uploadRouter.post('/avatar', verifyAuth, verifyUploadIcon, uploadIcon)

uploadRouter.post('/cover', verifyAuth, verifyUploadCover, uploadCover)

module.exports = uploadRouter
