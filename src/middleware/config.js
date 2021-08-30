// 传参规则配置文件

// 注册登录参数规则
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
    required: false
  },
  sort: {
    type: 'number',
    required: false,
    default: 0
  },
  type: {
    type: 'number',
    required: false,
    regexp: /^[1-2]$/
  },
  url: {
    type: 'string',
    required: false,
  },
  parent_id: {
    type: 'number',
    required: false
  }
}

// 删除菜单参数
const deleteMenuRules = {
  id: {
    type: 'number',
    required: true,
    nonempty: true
  }
}

// 创建权限
const createRuleRules = {
  ruleName: {
    type: 'string',
    required: true,
    nonempty: true
  },
  ruleIntro: {
    type: 'string',
    require: false
  },
  ruleMenu: {
    type: 'string',
    required: true,
    nonempty: true,
    regexp: /^(\d+\,)+\d+$/
  }
}

const alterRuleRules = {
  id: {
    type: 'number',
    required: true,
    nonempty: true,
    regexp: /^\d+$/
  },
  ruleName: {
    type: 'string',
    required: true,
    nonempty: true
  },
  ruleIntro: {
    type: 'string',
    require: false
  },
  ruleMenu: {
    type: 'string',
    require: false,
    regexp: /^\d+(,\d+)*$/
  }
}

module.exports = {
  signupRules,
  createMenuRules,
  deleteMenuRules,
  createRuleRules,
  alterRuleRules
}
