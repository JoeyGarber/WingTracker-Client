const onCreateRestaurantSuccess = function () {
  $('#message').html('<p>Restaurant Created</p>')
}

const onCreateRestaurantFailure = function () {
  $('#message').html('<p>Restaurant Creation failed</p>')
}

const onIndexRestaurantSuccess = function (response) {
  $('#message').html('<p>Restaurant Index Succeeded</p>')
  console.log(response)
  let data =
      `<tr>
        <th>Restaurant</th>
        <th>Website</th>
        <th>Wings</th>
        <th>Edit Restaurant</th>
      </tr>`
  for (let i = 0; i < response.restaurants.length; i++) {
    const restName = response.restaurants[i].name
    const restId = response.restaurants[i]._id
    const restWebsite = response.restaurants[i].website
    const wings = response.restaurants[i].wings

    // I'm running into an issue here because not all the restaurants are going to have wings. Some are going to have undefined fields for their wings. And jQuery can't read those.

    data += `
      <tr id="restaurant-content-${i}">
        <td class="show-update-restaurant-form" data-table-row="${i}" data-restid="${restId}">${restName}</td>
        <td class="show-update-restaurant-form" data-table-row="${i}" data-restid="${restId}">${restWebsite}</td>
        <td><table><tr>
        <th>Name</th><th>Spiciness</th><th>Quality</th>
        </tr>`

    for (let j = 0; j < wings.length; j++) {
      if (wings.length !== 0) {
        data += `
          <tr>
            <td>${wings[j].name}</td>
            <td>${wings[j].spiciness}</td>
            <td>${wings[j].quality}</td>
          </tr>
            `
      }
    }

    data += `
        </table></td>
        <td><button class="show-wing-form" data-restid="${restId}" data-table-row="${i}">Add Wing</button></td>
      </tr>`
  }
  $('#wings-table').html(data)
}

const onIndexRestaurantFailure = function () {
  $('#message').html('<p>Restaurant Index Failed</p>')
}

const onRestaurantUpdateSuccess = function () {
  $('#message').html('<p>Restaurant Update Succeeded</p>')
}

const onRestaurantUpdateFailure = function () {
  $('#message').html('<p>Restaurant Update Failed</p>')
}

module.exports = {
  onCreateRestaurantSuccess,
  onCreateRestaurantFailure,
  onIndexRestaurantSuccess,
  onIndexRestaurantFailure,
  onRestaurantUpdateSuccess,
  onRestaurantUpdateFailure
}
