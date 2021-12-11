const handleUrlName = (url, prefix) => {
  if (prefix === 'blog') {
    if (url.includes('menu')) {
      return 'blogMenu'
    } else if (url.includes('infos')) {
      return 'blogInfos'
    }
  } else {
    return prefix
  }
}

module.exports = {
  handleUrlName
}
