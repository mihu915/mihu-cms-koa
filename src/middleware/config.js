// 传参规则配置文件

// 注册参数规则
const signupRule = {
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

const createMenuRule = {
  title: {
    type: 'string',
    required: false,
    nonempty: false
  }
}

module.exports = {
  signupRule,
  createMenuRule
}
