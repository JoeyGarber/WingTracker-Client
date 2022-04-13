const getFormFields = require('../../lib/get-form-fields.js')
const restaurantApi = require('./restaurantApi.js')
const restaurantUi = require('./restaurantUi.js')

const onCreateRestaurant = function (event) {
  event.preventDefault()
  restaurantApi.createRestaurant(getFormFields(event.target))
    .then(restaurantUi.onCreateRestaurantSuccess)
    .catch(restaurantUi.onCreateRestaurantFailure)
}

const onIndexRestaurants = function (event) {
  event.preventDefault()
  restaurantApi
    .indexRestaurants()
    .then(restaurantUi.onIndexRestaurantSuccess)
    .catch(restaurantUi.onIndexRestaurantFailure)
}

const onUpdateRestaurant = function (event) {
  event.preventDefault()
  const prevDefault = event
  const restId = $(event.target).data('restid')
  const data = getFormFields(event.target)
  restaurantApi.updateRestaurant(data, restId)
    .then(() => onIndexRestaurants(prevDefault))
    .then(restaurantUi.onRestaurantUpdateSuccess)
    .catch(restaurantUi.onRestaurantUpdateFailure)
}

module.exports = {
  onCreateRestaurant,
  onIndexRestaurants,
  onUpdateRestaurant
}
