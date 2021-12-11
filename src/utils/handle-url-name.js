const handleUrlName = (url, prefix) => {
  if (prefix === 'blog') {
    if (url.includes('menu')) {
      return 'blogMenu'
    } else if (url.includes('infos')) {
      return 'blogInfos'
    }
  } else if (prefix === 'write') {
    if (url.includes('tag')) {
      return 'writeTag'
    } else {
      return 'write'
    }
  } else {
    return prefix
  }
}

module.exports = {
  handleUrlName
}
