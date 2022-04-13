const getFormFields = require('../../lib/get-form-fields.js')
const wingApi = require('./wingApi')
// const restaurantUi = require('./restaurantUi.js')

const onNewWing = function (event) {
  event.preventDefault()
  // const prevDefaultAble = event
  const restId = $(event.target).data('restid')
  const data = getFormFields(event.target)
  data.wing.restaurantId = restId
  console.log(data)
  wingApi.createWing(data)
}

module.exports = {
  onNewWing
}
