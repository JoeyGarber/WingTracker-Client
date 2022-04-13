const onCreateWingSuccess = function () {
  console.log('Created wing successfully')
}

const onCreateWingFailure = function () {
  console.log('Failed to create wing')
}

module.exports = {
  onCreateWingSuccess,
  onCreateWingFailure
}
