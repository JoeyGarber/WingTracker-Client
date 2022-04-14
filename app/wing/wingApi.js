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

const updateWing = function (restid, data) {
  return $.ajax({
    url: config.apiUrl + '/wings/' + restid,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const deleteWing = function (restid, data) {
  return $.ajax({
    url: config.apiUrl + '/wings/' + restid,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

module.exports = {
  createWing,
  updateWing,
  deleteWing
}
