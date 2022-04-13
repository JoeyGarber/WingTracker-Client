const getFormFields = require('../../lib/get-form-fields')
const authApi = require('./authApi.js')
const authUi = require('./authUi.js')
const restaurantEvents = require('../restaurant/restaurantEvents.js')

const onSignUp = function (event) {
  event.preventDefault()
  authApi.signUp(getFormFields(event.target))
    .then(authUi.onSignUpSuccess)
    .catch(authUi.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const prevDefault = event
  authApi.signIn(getFormFields(event.target))
    .then(authUi.onSignInSuccess)
    .then(() => restaurantEvents.onIndexRestaurants(prevDefault))
    .catch(authUi.onSignInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.onSignOutSuccess)
    .catch(authUi.onSignOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  authApi.changePassword(getFormFields(event.target))
    .then(authUi.onChangePasswordSuccess)
    .catch(authUi.onChangePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
