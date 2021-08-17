// 传参规则配置文件

// 注册参数规则
const signupRules = {
  username: {
    type: 'string',
    required: true,
    nonempty: true,
    regexp: /^[a-zA-Z0-9]{6,12}$/
  },
  password: {
    type: 'string',
    required: true,
    nonempty: true,
    regexp: /^[a-zA-Z0-9.]{6,12}$/
  }
}

// 创建菜单参数规则
const createMenuRules = {
  title: {
    type: 'string',
    required: true,
    nonempty: true
  },
  icon: {
    type: 'string',
    required: false,
  },
  sort: {
    type: 'number',
    required: false,
    default: 0
  },
  level: {
    type: 'number',
    required: false
  },
  url: {
    type: 'string',
    required: true,
    nonempty: true
  },
  parentId: {
    type: 'number',
    required: false
  }
}

const createRuleMenuRules= {
  ruleId: {
    type: 'number',
    required: true,
    nonempty: true
  },
  menuId: {
    type: 'string',
    require: true,
    nonempty: true,
    regexp: /^(\d+\,)+\d+$/
  }
}

module.exports = {
  signupRules,
  createMenuRules,
  createRuleMenuRules
}
