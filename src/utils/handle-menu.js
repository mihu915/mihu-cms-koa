const handleMenu = (menuList, range) => {
  for (let index = 0; index < range.length; index++) {
    range[index] = parseInt(range[index])
  }

  const finalMenuList = menuList.filter((parentMenu) => {
    if (!range.includes(parentMenu.dataValues.id)) {
      return false
    } else {
      const finalChildMenu = parentMenu.dataValues.children.filter(
        (childMenu) => {
          if (!range.includes(childMenu.dataValues.id)) return false
          return true
        }
      )

      parentMenu.dataValues.children = finalChildMenu
    }
    return true
  })

  return finalMenuList

}



module.exports = {
  handleMenu
}
