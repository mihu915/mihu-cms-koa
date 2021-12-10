const { addOperatorLog } = require('../service/operator.log.service')
const saveOperatorLog = async (type, info, data) => {
  let operatorTypeMessage = ''
  let operatorUsername = `账号：${info.username}，`
  let actionMessage = ''

  let message = {}
  const getActionMessage = () => {
    switch (info.prefix) {
      case 'user':
        actionMessage = message.user || `用户：${data.username}`
        break
      case 'role':
        actionMessage = message.role || `权限：${data.role_name}`
        break
      case 'menu':
        actionMessage = message.menu || `菜单：${data.title}`
        break
      case 'write':
        actionMessage = message.write || `文章：${data.title}`
        break
      case 'blog':
        if (info.path.includes('/blog/infos')) {
          actionMessage = message.blogInfo || `博客信息`
        } else if (info.path.includes('/blog/menu')) {
          actionMessage = message.blogMenu || `博客菜单：${data.menu_name}`
        }
        break
    }
  }

  switch (type) {
    case 1:
      operatorTypeMessage = '添加了'
      message = { user: `新用户：${data.username}` }
      getActionMessage()
      break
    case 2:
      operatorTypeMessage = '更新了'
      message = {
        user: `id为${data.id}的用户信息`,
        role: `id为${data.id}的权限信息`,
        menu: `id为${data.id}的菜单信息`,
        write: `id为${data.id}的文章信息`,
        blogMenu: `id为${data.id}的博客菜单信息`
      }
      getActionMessage()
      break
    case 3:
      operatorTypeMessage = '删除了'
      getActionMessage()
      break
  }
  if (info.role_id <= 2) {
    operatorType = type * -1
  }

  const logInfo = {
    operator_type: operatorType,
    operator_id: info.id,
    content: operatorUsername + operatorTypeMessage + actionMessage,
    operator_ip: info.ip,
    operator_time: info.time
  }
  console.log(logInfo)
  await addOperatorLog(logInfo)
}

module.exports = {
  saveOperatorLog
}
