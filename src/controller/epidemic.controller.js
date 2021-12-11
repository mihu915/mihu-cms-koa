const Axios = require('axios')

class EpidemicController {
  async getEpidemicData(ctx) {
    const sendRequest = await Axios.get(
      'https://c.m.163.com/ug/api/wuhan/app/data/list-total'
    )

    if (sendRequest.data.code === 10000) {
      sendRequest.data.code = 200
      const result = sendRequest.data.data.areaTree.find(item => {
        if (item.name === '中国') {
          return item
        }
      })
      result.lastUpdateTime = sendRequest.data.data.lastUpdateTime
      result.overseaLastUpdateTime = sendRequest.data.data.lastUpdateTime

      ctx.body = JSON.stringify({
        code: 200,
        message: '请求成功',
        data: result
      })
    } else {
      ctx.body = {
        code: 500,
        message: '请求失败，接口可能失效了'
      }
    }
  }
}

module.exports = new EpidemicController()
