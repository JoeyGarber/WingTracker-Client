const store = require('../store')

const onSignUpSuccess = function () {
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#message').show()
  $('#message').html('<p>Sign Up Failed</p>')
  $('#message').fadeOut(4000)
}

const onSignInSuccess = function (data) {
  $('form').trigger('reset')
  $('#auth-forms').hide()
  $('.topnav').css('display', 'block')
  $('#resource-forms').show()
  $('#wings-table').show()
  $('#searchbar').show()
  $('#memo').html('<p id="memo">Create a restaurant, then add your wings to it! Click on a created restaurant or wing to edit or delete it!</p>')
  store.user = data.user
}

const onSignInFailure = function () {
  $('#message').show()
  $('#message').html('<p>Sign In Failed</p>')
  $('#message').fadeOut(4000)
}

const onSignOutSuccess = function () {
  $('form').trigger('reset')
  $('.topnav').css('display', 'none')
  store.user = null
  $('#auth-forms').show()
  $('#change-password-form').hide()
  $('#searchbar').hide()
  $('#resource-forms').hide()
  $('#wings-table').hide()
  $('#memo').html('<p id=\'memo\'>Keep track of your personal wing spiciness opinions!</p>')
}

const onSignOutFailure = function () {
  $('#message').show()
  $('#message').html('<p>Sign Out Failed</p>')
  $('#message').fadeOut(4000)
}

const onChangePasswordSuccess = function () {
  $('form').trigger('reset')
  $('#message').show()
  $('#message').html('<p>Password Changed</p>')
  $('#message').fadeOut(4000)
}

const onChangePasswordFailure = function () {
  $('#message').show()
  $('#message').html('<p>Password Change Failed</p>')
  $('#message').fadeOut(4000)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
