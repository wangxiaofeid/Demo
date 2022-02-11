const delay = require('mocker-api/utils/delay')
const common = require('./common')
const userConfig = require('./userConfig')

const mockData = {
  ...common,
  ...userConfig,
  'POST /api/config/querySearchConfig': (req, res) => {
    const data = common['POST /api/config/querySearchConfig']
    data.data.forEach((it) => {
      it.id = `${it.id}_${Math.random()}`
    })
    res.json(data)
  }
}

module.exports = delay(mockData, 100)
