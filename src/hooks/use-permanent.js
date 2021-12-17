const { saveOperatorLog } = require('../utils/save-operator-log')
const { verifyDelete } = require('../utils/verify-delete')

const usePermanent = {
  // 批量创建
  beforeBulkCreate: (instance, options) => {},

  // 批量删除之前
  beforeBulkDestroy: options => {},

  // 批量更新数据之前调用此钩子函数
  beforeBulkUpdate: options => {},

  // 验证之前
  beforeValidate: () => {},

  // 创建数据之前的钩子函数
  beforeCreate: instance => {
    let now = Math.round(Date.now() / 1000)
    instance.created = now
    instance.updated = now
  },

  // 删除之前
  beforeDestroy: (instance, options) => {
    const id = instance.dataValues.id
    const urlName = options.operatorInfo.urlName
    // 校验删除是否被允许
    verifyDelete(urlName, id)
  },

  // 设置为单个update操作 才会调用此钩子函数
  beforeUpdate: (instance, options) => {
    // 如果值有变化则更新updated
    if (instance.changed()) {
      instance.updated = Math.round(Date.now() / 1000)
    }
  },

  // 创建之后
  afterCreate: async (instance, options) => {
    await saveOperatorLog(1, options.operatorInfo, instance.dataValues)
  },

  // 删除之后
  afterDestroy: async (instance, options) => {
    await saveOperatorLog(3, options.operatorInfo, instance.dataValues)
  },

  // 更新之后
  afterUpdate: async (instance, options) => {
    await saveOperatorLog(2, options.operatorInfo, instance.dataValues)
  }
}

module.exports = {
  usePermanent
}
