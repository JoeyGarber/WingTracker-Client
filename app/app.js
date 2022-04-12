// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/authEvents.js')
const authUi = require('./auth/authUi')
const restaurantEvents = require('./restaurant/restaurantEvents.js')

$(() => {
  // Auth event listeners
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#show-change-password-form-button').on('click', authUi.onShowChangePasswordFormButton)
  $('#change-password-div').on('submit', '#change-password-form', authEvents.onChangePassword)
})
