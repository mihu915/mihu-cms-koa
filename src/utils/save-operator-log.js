const { addOperatorLog } = require('../service/operator.log.service')
const saveOperatorLog = async (type, info, data) => {
  let operatorType = ''
  let actionType = ''
  let actionMessage = ''
  let operatorContent = ''

  switch (info.prefix) {
    case 'user':
      actionType = `用户`
      actionMessage = `：${data.username}`
      break
    case 'role':
      actionType = `权限`
      actionMessage = `：${data.role_name}`
      break
    case 'menu':
      actionType = `菜单`
      actionMessage = `：${data.title}`
      break
    case 'write':
      actionType = `文章`
      actionMessage = `：《${data.title}》`
      break
    case 'blog':
      if (info.path.includes('/blog/infos')) {
        actionType = `博客配置`
      } else if (info.path.includes('/blog/menu')) {
        actionType = `博客菜单`
        actionMessage = `：${data.menu_name}`
      }
      break
  }

  switch (type) {
    case 1:
      operatorType = '添加了'
      break
    case 2:
      operatorType = '更新了'
      actionMessage = '信息'
      break
    case 3:
      operatorType = '删除了'
      break
  }

  operatorContent =
    `账号：${info.username}，` +
    operatorType +
    actionType +
    actionMessage +
    `，id为：${data.id}`

  if (info.role_id <= 2) {
    operatorType = type * -1
  }

  const logInfo = {
    operator_type: operatorType,
    operator_id: info.id,
    content: operatorContent,
    operator_ip: info.ip,
    operator_time: info.time
  }
  console.log(logInfo)
  await addOperatorLog(logInfo)
}

module.exports = {
  saveOperatorLog
}
