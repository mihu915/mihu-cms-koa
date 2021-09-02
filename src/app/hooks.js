const hooks = {
  // 创建数据之前的钩子函数
  beforeCreate: (instance) => {
    console.log('常驻的beforeCreate')
    let now = Math.round(Date.now() / 1000)
    instance.created = now
    instance.updated = now
  },

  // 批量更新数据之前调用此钩子函数
  beforeBulkUpdate(option) {
    console.log('常驻的beforeBulkUpdate')
    // 设置所有批量update操作为单个更新操作
    option.individualHooks = true
  },

  // 单个update操作调用此钩子函数
  beforeUpdate: (instance, option) => {
    console.log('常驻的beforeUpdate')
    instance.updated = Math.round(Date.now() / 1000)
  }
}

module.exports = {
  hooks
}
