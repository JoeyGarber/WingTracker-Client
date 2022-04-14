const onCreateWingSuccess = function () {
  $('form').trigger('reset')
  console.log('Created wing successfully')
}

const onCreateWingFailure = function () {
  console.log('Failed to create wing')
}

const onUpdateWingSuccess = function () {
  $('form').trigger('reset')
  console.log('Created wing successfully')
}

const onUpdateWingFailure = function () {
  console.log('Failed to create wing')
}

module.exports = {
  onCreateWingSuccess,
  onCreateWingFailure,
  onUpdateWingSuccess,
  onUpdateWingFailure
}
