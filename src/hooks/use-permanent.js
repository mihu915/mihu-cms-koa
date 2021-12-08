const { sequelize } = require('../app/database')
const usePermanent = {
  // 创建数据之前的钩子函数
  beforeCreate: instance => {
    let now = Math.round(Date.now() / 1000)
    instance.created = now
    instance.updated = now
  },

  // 批量更新数据之前调用此钩子函数
  beforeBulkUpdate(option) {
    // 设置所有批量update操作为单个更新操作
    option.individualHooks = true
  },

  // 设置为单个update操作 才会调用此钩子函数
  beforeUpdate: (instance, option) => {
    // console.log(instance)
    console.log(sequelize)
    // 如果值有变化则更新updated
    if (instance.changed()) {
      instance.updated = Math.round(Date.now() / 1000)
    }
  },

  afterUpdate: (instance, option) => {}
}

module.exports = {
  usePermanent
}
