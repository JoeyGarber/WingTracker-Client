const getFormFields = require('../../lib/get-form-fields.js')
const wingApi = require('./wingApi')
const wingUi = require('./wingUi')
const restaurantEvents = require('../restaurant/restaurantEvents.js')

// const restaurantUi = require('./restaurantUi.js')

const onCreateWing = function (event) {
  event.preventDefault()
  const prevDefaultAble = event
  const restId = $(event.target).data('restid')
  const data = getFormFields(event.target)
  data.wing.restaurantId = restId
  console.log(data)
  wingApi.createWing(data)
    .then(() => restaurantEvents.onIndexRestaurants(prevDefaultAble))
    .then(wingUi.onCreateWingSuccess)
    .catch(wingUi.onCreateWingFailure)
}

module.exports = {
  onCreateWing
}
