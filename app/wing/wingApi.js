const config = require('../config.js')
const store = require('../store.js')

const createWing = function (data) {
  return $.ajax({
    url: config.apiUrl + '/wings',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

module.exports = {
  createWing
}
