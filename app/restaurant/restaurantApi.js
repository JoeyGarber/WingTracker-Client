const config = require('../config.js')
const store = require('../store.js')

const createRestaurant = function (data) {
  return $.ajax({
    url: config.apiUrl + '/restaurants',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const indexRestaurants = function (data) {
  return $.ajax({
    url: config.apiUrl + '/restaurants',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createRestaurant,
  indexRestaurants
}
