const store = require('../store')

const onSignUpSuccess = function () {
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#message').show()
  $('#message').html('<p>Sign Up Failed</p>')
  $('#message').hide(4000)
}

const onSignInSuccess = function (data) {
  console.log(data)
  $('form').trigger('reset')
  $('#auth-forms').hide()
  $('.topnav').css('display', 'block')
  $('#resource-forms').show()
  $('#wings-table').show()
  $('#searchbar').show()
  $('#memo').show()
  store.user = data.user
}

const onSignInFailure = function () {
  $('#message').show()
  $('#message').html('<p>Sign In Failed</p>')
  $('#message').hide(4000)
}

const onSignOutSuccess = function () {
  $('#message').show()
  $('#message').html('<p>Sign Out Success</p>')
  $('#message').hide(4000)
  $('.topnav').css('display', 'none')
  store.user = null
  $('#auth-forms').show()
  $('#change-password-form').hide()
  $('#resource-forms').hide()
  $('#wings-table').hide()
  $('#memo').hide()
}

const onSignOutFailure = function () {
  $('#message').show()
  $('#message').html('<p>Sign Out Failed</p>')
  $('#message').hide(4000)
}

const onChangePasswordSuccess = function () {
  $('#message').show()
  $('#message').html('<p>Password Changed</p>')
  $('#message').hide(4000)
}

const onChangePasswordFailure = function () {
  $('#message').show()
  $('#message').html('<p>Password Change Failed</p>')
  $('#message').hide(4000)
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
