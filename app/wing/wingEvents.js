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

const onUpdateWing = function (event) {
  event.preventDefault()
  const prevDefaultAble = event
  const restId = $(event.target).data('restid')
  const wingId = $(event.target).data('wingid')
  const data = getFormFields(event.target)
  data.wing.wingId = wingId
  console.log(data)
  wingApi
    .updateWing(restId, data)
    .then(() => restaurantEvents.onIndexRestaurants(prevDefaultAble))
    .then(wingUi.onUpdateWingSuccess)
    .catch(wingUi.onUpdateWingFailure)
}

const onDeleteWing = function (event) {
  event.preventDefault()
  const prevDefaultAble = event
  const restId = $(event.target).data('restid')
  const wingId = $(event.target).data('wingid')
  const data = {
    wing: {
      wingId: wingId
    }
  }
  wingApi.deleteWing(restId, data)
    .then(() => restaurantEvents.onIndexRestaurants(prevDefaultAble))
    .then(wingUi.onDeleteWingSuccess)
    .catch(wingUi.onDeleteWingFailure)
}

module.exports = {
  onCreateWing,
  onUpdateWing,
  onDeleteWing
}
