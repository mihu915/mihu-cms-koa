const Axios = require('axios')

class EpidemicController {
  async getEpidemicData(ctx) {
    const sendRequest = await Axios.get(
      'https://c.m.163.com/ug/api/wuhan/app/data/list-total'
    )

    if (sendRequest.data.code === 10000) {
      sendRequest.data.code = 200
      ctx.body = JSON.stringify(sendRequest.data)
    } else {
      ctx.body = {
        code: 500,
        message: '请求失败，接口可能失效了'
      }
    }
  }
}

module.exports = new EpidemicController()
