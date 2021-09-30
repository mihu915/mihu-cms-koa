const Router = require('koa-router')
const { uploadImage } = require('../controller/upload')
const { setUploadConfig } = require('../middleware/upload')
const { verifyAuth } = require('../middleware/auth')
const uploadRouter = new Router({ prefix: '/files' })

// 上传头像
uploadRouter.post('/avatar', verifyAuth, setUploadConfig, uploadImage)

// 上传文章封面
uploadRouter.post('/cover', verifyAuth, setUploadConfig, uploadImage)

// 上传文章截图
uploadRouter.post('/screenshot', verifyAuth, setUploadConfig, uploadImage)

// 上传blogger头像
uploadRouter.post('/blog/avatar', verifyAuth, setUploadConfig, uploadImage)

module.exports = uploadRouter
