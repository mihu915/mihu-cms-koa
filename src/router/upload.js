const Router = require('koa-router')
const { uploadIcon, uploadCover } = require('../controller/upload')
const { setUploadConfig } = require('../middleware/upload')
const { verifyAuth } = require('../middleware/auth')
const uploadRouter = new Router({ prefix: '/files' })

// 上传头像
uploadRouter.post('/avatar', verifyAuth, setUploadConfig, uploadIcon)

// 上传文章封面
uploadRouter.post('/cover', verifyAuth, setUploadConfig, uploadCover)

module.exports = uploadRouter
