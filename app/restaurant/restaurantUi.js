const onCreateRestaurantSuccess = function () {
  $('form').trigger('reset')
}

const onCreateRestaurantFailure = function () {
  $('#message').show()
  $('#message').html('<p>Restaurant Creation failed</p>')
  $('#message').fadeOut(4000)
}

const onIndexRestaurantSuccess = function (response) {
  let data =
      `<tr>
        <th>Restaurant</th>
        <th>Website</th>
        <th>Wings</th>
        <th></th>
      </tr>`
  for (let i = 0; i < response.restaurants.length; i++) {
    const restName = response.restaurants[i].name
    const restId = response.restaurants[i]._id
    const restWebsite = response.restaurants[i].website
    const wings = response.restaurants[i].wings

    // I'm running into an issue here because not all the restaurants are going to have wings. Some are going to have undefined fields for their wings. And jQuery can't read those.

    data += `
      <tr class="restaurant-row" id="restaurant-content-${i}">
        <td class="show-restaurant-form" data-rest-name="${restName}" data-rest-website="${restWebsite}" data-table-row="${i}" data-restid="${restId}">${restName}</td>
        <td class="show-restaurant-form" data-rest-name="${restName}" data-rest-website="${restWebsite}" data-table-row="${i}" data-restid="${restId}">${restWebsite}</td>
        <td><table><tr>
        <th>Name</th><th>Spiciness</th><th>Quality</th>
        </tr>`

    for (let j = 0; j < wings.length; j++) {
      if (wings.length !== 0) {
        data += `
          <tr>
            <td class="show-wing-form" data-wing-name="${wings[j].name}" data-wing-spiciness="${wings[j].spiciness}" data-wing-quality="${wings[j].quality}" data-table-row="${i}" data-restid="${restId}" data-wingid="${wings[j]._id}">${wings[j].name}</td>
            <td class="show-wing-form" data-wing-name="${wings[j].name}" data-wing-spiciness="${wings[j].spiciness}" data-wing-quality="${wings[j].quality}" data-table-row="${i}" data-restid="${restId}" data-wingid="${wings[j]._id}">${wings[j].spiciness}</td>
            <td class="show-wing-form" data-wing-name="${wings[j].name}" data-wing-spiciness="${wings[j].spiciness}" data-wing-quality="${wings[j].quality}" data-table-row="${i}" data-restid="${restId}" data-wingid="${wings[j]._id}">${wings[j].quality}</td>
          </tr>
            `
      }
    }

    data += `
        </table></td>
        <td><button class="show-create-wing-form" data-restid="${restId}" data-table-row="${i}">Add Wing</button></td>
      </tr>`
  }
  $('#wings-table').html(data)
  $('.show-create-wing-form').show()
}

const onIndexRestaurantFailure = function () {
  $('#message').show()
  $('#message').html('<p>Restaurant Index Failed</p>')
  $('#message').fadeOut(4000)
}

const onUpdateRestaurantSuccess = function () {
  $('form').trigger('reset')
}

const onUpdateRestaurantFailure = function () {
  $('#message').show()
  $('#message').html('<p>Restaurant Update Failed</p>')
  $('#message').fadeOut(4000)
}

const onDeleteRestaurantSuccess = function () {
  $('form').trigger('reset')
}

const onDeleteRestaurantFailure = function () {
  $('#message').html('<p>Restaurant Deletion Failed</p>')
  $('#message').fadeOut(4000)
}

module.exports = {
  onCreateRestaurantSuccess,
  onCreateRestaurantFailure,
  onIndexRestaurantSuccess,
  onIndexRestaurantFailure,
  onUpdateRestaurantSuccess,
  onUpdateRestaurantFailure,
  onDeleteRestaurantSuccess,
  onDeleteRestaurantFailure
}
