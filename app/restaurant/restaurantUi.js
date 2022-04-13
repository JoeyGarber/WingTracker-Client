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
    // const wings = response.restaurants[i].wings

    // const wingName = wings[0].name
    // console.log(wingName)
    // const wingSpiciness = wings[0].spiciness
    // console.log(wingSpiciness)

    data += `
      <tr id="restaurant-content-${i}">
        <td class="show-new-wing-form" data-table-row="${i}" data-restid="${restId}">${restName}</td>
        <td>${restWebsite}</td>
        <td><table>
        <tr>
          <td>test</td>
          <td>test</td>
        </tr>
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
