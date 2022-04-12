const onCreateRestaurantSuccess = function () {
  console.log('Restaurant Created')
}

const onCreateRestaurantFailure = function () {
  console.log('Restaurant Creation Failed')
}

const onIndexRestaurantSuccess = function (response) {
  console.log('Restaurant Index Succeeded')
  console.log(response)
}

const onIndexRestaurantFailure = function () {
  console.log('Restaurant Index Failed')
}

module.exports = {
  onCreateRestaurantSuccess,
  onCreateRestaurantFailure,
  onIndexRestaurantSuccess,
  onIndexRestaurantFailure
}
