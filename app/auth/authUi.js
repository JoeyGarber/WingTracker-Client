const store = require('../store')

const onSignUpSuccess = function () {
  console.log('Sign Up Worked')
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  console.log('Sign Up Failed')
}

const onSignInSuccess = function (data) {
  console.log('Sign In Worked')
  console.log(data)
  $('form').trigger('reset')
  $('#auth-forms').hide()
  $('.topnav').css('display', 'block')
  $('#resource-forms').show()
  store.user = data.user
}

const onSignInFailure = function () {
  console.log('Sign In Failed')
}

const onSignOutSuccess = function () {
  console.log('Sign Out Worked')
  $('.topnav').css('display', 'none')
  store.user = null
  $('#auth-forms').show()
  $('#change-password-form').hide()
  $('#resource-forms').show().hide()
}

const onSignOutFailure = function () {
  console.log('Sign Out Failed')
}

const onShowChangePasswordFormButton = function () {
  $('#change-password-div').html(`<form id="change-password-form">
        <input type="password" name="passwords[old]" placeholder="Old Password">
        <input type="password" name="passwords[new]" placeholder="New Password">
        <button type="submit">Change Password</button>
      </form>`)
}

const onChangePasswordSuccess = function () {
  console.log('Password changed')
}

const onChangePasswordFailure = function () {
  console.log('Password change failed')
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
