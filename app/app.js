// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const helpers = require('./helpers.js')
const authEvents = require('./auth/authEvents.js')
const restaurantEvents = require('./restaurant/restaurantEvents.js')
const wingEvents = require('./wing/wingEvents.js')

$(() => {
  // Auth event listeners
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#show-change-password-form-button').on('click', helpers.showChangePasswordForm)
  $('#change-password-div').on('submit', '#change-password-form', authEvents.onChangePassword)
  $('#change-password-div').on('click', '#cancel-change-password-button', helpers.hideChangePasswordForm)

  // Restaurant listeners
  $('#create-restaurant-form').on('submit', restaurantEvents.onCreateRestaurant)
  $('#wings-table').on('click', '.show-restaurant-form', helpers.showRestaurantForm)
  $('#wings-table').on('submit', '#restaurant-form', restaurantEvents.onUpdateRestaurant)
  $('#wings-table').on('click', '#delete-restaurant-button', restaurantEvents.onDeleteRestaurant)
  $('#wings-table').on('click', '.cancel-button', restaurantEvents.onIndexRestaurants)

  // Wing listeners
  $('#wings-table').on('click', '.show-create-wing-form', helpers.showCreateWingForm)
  $('#wings-table').on('submit', '#create-wing-form', wingEvents.onCreateWing)
  $('#wings-table').on('click', '.show-wing-form', helpers.showWingForm)
  $('#wings-table').on('submit', '#wing-form', wingEvents.onUpdateWing)
  $('#wings-table').on('click', '#delete-wing-button', wingEvents.onDeleteWing)

  // Searchbar
  $('#searchbar').on('keyup', helpers.searchbar)
})
