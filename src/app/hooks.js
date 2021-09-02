const hooks = {
  // 创建数据之前的钩子函数
  beforeCreate: (instance) => {
    console.log('beforeCreate')
    let now = Math.round(Date.now() / 1000)
    instance.created = now
    instance.updated = now
  },

  // 批量更新数据之前调用此钩子函数
  beforeBulkUpdate(option) {
    console.log('beforeBulkUpdate')
    // 设置所有批量update操作为单个更新操作
    option.individualHooks = true
  },

  // 单个update操作调用此钩子函数
  beforeUpdate: (instance, option) => {
    // 如果值有变化则更新updated
    if (instance.changed()) {
      instance.updated = Math.round(Date.now() / 1000)
    }
  }
}

module.exports = {
  hooks
}
