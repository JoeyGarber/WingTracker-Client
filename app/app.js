// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const helpers = require('./helpers.js')
const authEvents = require('./auth/authEvents.js')
const authUi = require('./auth/authUi')
const restaurantEvents = require('./restaurant/restaurantEvents.js')
const wingEvents = require('./wing/wingEvents.js')

$(() => {
  // Auth event listeners
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#show-change-password-form-button').on('click', authUi.onShowChangePasswordFormButton)
  $('#change-password-div').on('submit', '#change-password-form', authEvents.onChangePassword)

  // Restaurant listeners
  $('#create-restaurant-form').on('submit', restaurantEvents.onCreateRestaurant)
  $('#index-restaurants-button').on('click', restaurantEvents.onIndexRestaurants)
  $('#wings-table').on('click', '.show-update-restaurant-form', helpers.showUpdateRestaurantForm)
  $('#wings-table').on('submit', '#update-restaurant-form', restaurantEvents.onUpdateRestaurant)

  // Wing listeners
  $('#wings-table').on('click', '.show-wing-form', helpers.showWingForm)
  $('#wings-table').on('submit', '#wing-form', wingEvents.onCreateWing)
})
