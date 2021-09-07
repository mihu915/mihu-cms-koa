const handleMenu = (menuList, range) => {
  for (let index = 0; index < range.length; index++) {
    range[index] = parseInt(range[index])
  }

  let parentIndex = 0
  menuList.forEach((parentMenu) => {
    const parent = range.includes(parentMenu.id)
    if (!parent) {
      menuList.splice(parentIndex, 1)
    }

    let childrenIndex = 0
    parentMenu.dataValues.children.forEach((childrenMenu) => {
      const children = range.includes(childrenMenu.id)
      if (!children) {
        parentMenu.dataValues.children.splice(childrenIndex, 1)
      }
      console.log(children, 'children', childrenMenu.id)
      childrenIndex++
    })
    console.log(parent, 'parent', parentMenu.id)
    parentIndex++
  })

  // 将子级菜单添加至父级菜单
  // menuList.forEach((menu) => {
  //   menu.dataValues.children = []
  //   // 删除属性
  //   if (!menu.dataValues.parent_id && menu.dataValues.type === 1) {
  //     delete menu.dataValues.parent_id
  //   } else if (!menu.dataValues.icon) {
  //     delete menu.dataValues.icon
  //   }

  //   // 循环添加子菜单
  //   for (let i = 0; i < menuList.length; i++) {
  //     if (
  //       menuList[i].parent_id === menu.dataValues.id &&
  //       menuList[i].type === 2
  //     ) {
  //       menu.dataValues.children.push(menuList[i])
  //     }
  //   }
  // })

  // // 循环清除已添加过的子级菜单
  // for (let i = 0; i < menuList.length; i++) {
  //   if (menuList[i].parent_id && menuList[i].type === 2) {
  //     menuList.splice(i, 1)
  //     i--
  //   }
  // }

  // // 根据sort属性排序
  // // 1.排序第一层
  // menuList.sort(handleSort('sort'))
  // // 2.排序第二层
  // menuList.forEach((parentMenu) => {
  //   if (parentMenu.dataValues.children.length > 0) {
  //     parentMenu.dataValues.children.sort(handleSort('sort'))
  //   }
  // })
}

// 处理排序具体逻辑
const handleSort = (property) => {
  return function (first, last) {
    const firstValue = first[property]
    const lastValue = last[property]
    return firstValue - lastValue
  }
}

module.exports = {
  handleMenu
}
