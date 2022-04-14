const onCreateRestaurantSuccess = function () {
  $('#message').show()
  $('#message').html('<p>Restaurant Created</p>')
  $('#message').hide(4000)
}

const onCreateRestaurantFailure = function () {
  $('#message').show()
  $('#message').html('<p>Restaurant Creation failed</p>')
  $('#message').hide(4000)
}

const onIndexRestaurantSuccess = function (response) {
  console.log(response)
  let data =
      `<tr>
        <th>Restaurant</th>
        <th>Website</th>
        <th>Wings</th>
        <th>Add Wing</th>
      </tr>`
  for (let i = 0; i < response.restaurants.length; i++) {
    const restName = response.restaurants[i].name
    const restId = response.restaurants[i]._id
    const restWebsite = response.restaurants[i].website
    const wings = response.restaurants[i].wings

    // I'm running into an issue here because not all the restaurants are going to have wings. Some are going to have undefined fields for their wings. And jQuery can't read those.

    data += `
      <tr class="restaurant-row" id="restaurant-content-${i}">
        <td class="show-restaurant-form" data-table-row="${i}" data-restid="${restId}">${restName}</td>
        <td class="show-restaurant-form" data-table-row="${i}" data-restid="${restId}">${restWebsite}</td>
        <td><table><tr>
        <th>Name</th><th>Spiciness</th><th>Quality</th>
        </tr>`

    for (let j = 0; j < wings.length; j++) {
      if (wings.length !== 0) {
        data += `
          <tr>
            <td class="show-wing-form" data-table-row="${i}" data-restid="${restId}" data-wingid="${wings[j]._id}">${wings[j].name}</td>
            <td class="show-wing-form" data-table-row="${i}" data-restid="${restId}" data-wingid="${wings[j]._id}">${wings[j].spiciness}</td>
            <td class="show-wing-form" data-table-row="${i}" data-restid="${restId}" data-wingid="${wings[j]._id}">${wings[j].quality}</td>
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
}

const onIndexRestaurantFailure = function () {
  $('#message').show()
  $('#message').html('<p>Restaurant Index Failed</p>')
  $('#message').hide(4000)
}

const onUpdateRestaurantSuccess = function () {
  $('#message').show()
  $('#message').html('<p>Restaurant Update Succeeded</p>')
  $('#message').hide(4000)
}

const onUpdateRestaurantFailure = function () {
  $('#message').show()
  $('#message').html('<p>Restaurant Update Failed</p>')
  $('#message').hide(4000)
}

const onDeleteRestaurantSuccess = function () {
  $('#message').show()
  $('#message').html('<p>Restaurant Deletion Succeeded</p>')
  $('#message').hide(4000)
}

const onDeleteRestaurantFailure = function () {
  $('#message').html('<p>Restaurant Deletion Failed</p>')
  $('#message').hide(4000)
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
