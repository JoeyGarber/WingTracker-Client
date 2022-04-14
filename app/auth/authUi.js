const store = require('../store')

const onSignUpSuccess = function () {
  $('#message').html('<p>Sign Up Success</p>')
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#message').html('<p>Sign Up Failed</p>')
}

const onSignInSuccess = function (data) {
  $('#message').html('<p>Sign In Success</p>')
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
  $('#message').html('<p>Sign In Failed</p>')
}

const onSignOutSuccess = function () {
  $('#message').html('<p>Sign Out Success</p>')
  $('.topnav').css('display', 'none')
  store.user = null
  $('#auth-forms').show()
  $('#change-password-form').hide()
  $('#resource-forms').hide()
  $('#wings-table').hide()
  $('#memo').hide()
}

const onSignOutFailure = function () {
  $('#message').html('<p>Sign Out Failed</p>')
}

const onShowChangePasswordFormButton = function () {
  $('#change-password-div').html(`<form id="change-password-form">
        <input type="password" name="passwords[old]" placeholder="Old Password">
        <input type="password" name="passwords[new]" placeholder="New Password">
        <button type="submit">Change Password</button>
      </form>`)
}

const onChangePasswordSuccess = function () {
  $('#message').html('<p>Password Changed</p>')
}

const onChangePasswordFailure = function () {
  $('#message').html('<p>Password Change Failed</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onShowChangePasswordFormButton
}
