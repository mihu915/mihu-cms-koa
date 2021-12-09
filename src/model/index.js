const BlogInfos = require('./blog.infos.model')
const BlogMenu = require('./blog.menu.model')
const User = require('./user.model')
const Menu = require('./menu.model')
const Role = require('./role.model')
const Write = require('./write.model')

// user关联role
User.belongsTo(Role, {
  foreignKey: 'role_id',
  as: 'user_role'
})

// menu自关联
Menu.hasMany(Menu, {
  foreignKey: 'parent_id',
  as: 'children'
})

module.exports = {
  User,
  BlogInfos,
  BlogMenu,
  Menu,
  Role,
  Write
}
