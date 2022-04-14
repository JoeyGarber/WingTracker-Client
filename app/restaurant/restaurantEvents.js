const getFormFields = require('../../lib/get-form-fields.js')
const restaurantApi = require('./restaurantApi.js')
const restaurantUi = require('./restaurantUi.js')

const onCreateRestaurant = function (event) {
  event.preventDefault()
  const prevDefaultAble = event
  restaurantApi.createRestaurant(getFormFields(event.target))
    .then(restaurantUi.onCreateRestaurantSuccess)
    .then(() => onIndexRestaurants(prevDefaultAble))
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
  const prevDefaultAble = event
  const restId = $(event.target).data('restid')
  const data = getFormFields(event.target)
  restaurantApi.updateRestaurant(data, restId)
    .then(() => onIndexRestaurants(prevDefaultAble))
    .then(restaurantUi.onUpdateRestaurantSuccess)
    .catch(restaurantUi.onUpdateRestaurantFailure)
}

const onDeleteRestaurant = function (event) {
  event.preventDefault()
  const prevDefaultAble = event
  const restId = $(event.target).data('restid')
  restaurantApi.deleteRestaurant(restId)
    .then(() => onIndexRestaurants(prevDefaultAble))
    .then(restaurantUi.onDeleteRestaurantSuccess)
    .catch(restaurantUi.onDeleteRestaurantFailure)
}

module.exports = {
  onCreateRestaurant,
  onIndexRestaurants,
  onUpdateRestaurant,
  onDeleteRestaurant
}
