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

    data += `
      <tr id="wings-content-${i}">
        <td data-restid="${restId}">${restName}</td>
        <td>${restWebsite}</td>
        <td><table>
          <td>${wings.name}</td>
          <td>${wings.spiciness}</td>
        </table></td>
        <td><button class="show-update-restaurant-button" data-restid="${restId}" data-table-row="${i}">Update Restaurant</button></td>
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
