const onCreateWingSuccess = function () {
  $('form').trigger('reset')
}

const onCreateWingFailure = function () {
  $('#message').show()
  $('#message').html('<p>Failed to create wing</p>')
  $('#message').fadeOut(4000)
}

const onUpdateWingSuccess = function () {
  $('form').trigger('reset')
}

const onUpdateWingFailure = function () {
  $('#message').show()
  $('#message').html('<p>Failed to create restaurant</p>')
  $('#message').fadeOut(4000)
}

module.exports = {
  onCreateWingSuccess,
  onCreateWingFailure,
  onUpdateWingSuccess,
  onUpdateWingFailure
}
