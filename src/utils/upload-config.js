const multer = require('koa-multer')
const { errorTypes } = require('../error/error-types')
const { PUBLIC_RESOURCE_PATH } = require('../app/config')
const { dirExists } = require('./handle-file-path')

function uploadConfig() {
  // 存放路径和文件名
  const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
      const finalPath = PUBLIC_RESOURCE_PATH + req.url
      const result = await dirExists(finalPath)

      if (!result) throw new Error('create file error')
      cb(null, finalPath)
    },

    filename: (req, file, cb) => {
      let type = file.originalname.split('.')[1] //获取后缀
      cb(null, `${file.fieldname}-${Date.now().toString(16)}.${type}`) // 根据时间戳生成文件名并拼接后缀
    }
  })

  // 文件上传设置
  const limits = {
    fields: 0, // 非文件字段的数量
    fileSize: 10000 * 1024, //单位大小kb
    files: 3 // 文件数量
  }

  const fileFilter = (req, file, cb) => {
    // 限制文件上传类型，仅可上传png格式图片
    const fileTypes = ['image/png', 'image/jpg', 'image/jpeg']
    if (fileTypes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(errorTypes.NOT_SUPPORTED_FILE_TYPE, false)
    }
  }

  const upload = multer({ storage, limits, fileFilter })

  return upload
}

module.exports = {
  uploadConfig
}
