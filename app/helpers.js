const showRestaurantForm = function (event) {
  event.preventDefault()
  // get the id of the rest it's going to update
  const restId = $(event.target).data('restid')
  // target the line it's going to update
  const tableRowNum = $(event.target).data('table-row')
  const restName = $(event.target).data('rest-name')
  const restWebsite = $(event.target).data('rest-website')
  // Going to make it into HTML forms
  const formHtml = `
  <td><p>${restName} | ${restWebsite}</p><form id="restaurant-form" data-restid="${restId}">
    <input name="restaurant[name]" type="text" placeholder="New Name">
    <input name="restaurant[website]" type="text" placeholder="New Website">
    <button id="update-restaurant-button" type="submit">Submit</button>
</form><button id="delete-restaurant-button" data-restid="${restId}">Delete Restaurant</button><button class="cancel-button">Cancel</button></td>
`
  $(`#restaurant-content-${tableRowNum}`).html(formHtml)
  $('.show-create-wing-form').hide()
}

const showCreateWingForm = function (event) {
  const restId = $(event.target).data('restid')
  const tableRowNum = $(event.target).data('table-row')
  const formHtml = `
  <td><form id="create-wing-form" data-restid="${restId}">
    <input name="wing[name]" type="text" placeholder="New Wing Name">
    <input name="wing[spiciness]" type="number" id="spiciness" min="1" max="100">
    <label for="spiciness">Spiciness (1-10)</label>
    <input name="wing[quality]" type="number" id="quality" min="1" max="100">
    <label for="quality">Quality (1-10)</label>
    <button id="update-restaurant-button" type="submit">Create Wing</button>
</form><button class="cancel-button">Cancel</button></td>
`
  $(`#restaurant-content-${tableRowNum}`).html(formHtml)
  $('.show-create-wing-form').hide()
}

const showWingForm = function (event) {
  const restId = $(event.target).data('restid')
  const wingId = $(event.target).data('wingid')
  const wingName = $(event.target).data('wing-name')
  const wingSpiciness = $(event.target).data('wing-spiciness')
  const wingQuality = $(event.target).data('wing-quality')
  const tableRowNum = $(event.target).data('table-row')
  const formHtml = `
  <td><p>${wingName} | Spiciness: ${wingSpiciness} | Quality: ${wingQuality}</p><form id="wing-form" data-restid="${restId}" data-wingid="${wingId}">
    <input name="wing[name]" type="text" placeholder="New Wing Name">
    <input name="wing[spiciness]" type="number" id="spiciness" min="1" max="100">
    <label for="spiciness">Spiciness (1-10)</label>
    <input name="wing[quality]" type="number" id="quality" min="1" max="100">
    <label for="quality">Quality (1-10)</label>
    <button id="update-restaurant-button" type="submit">Update Wing</button>
</form><button id="delete-wing-button" data-restid="${restId}" data-wingid="${wingId}">Delete Wing</button><button class="cancel-button">Cancel</button></td>
`
  $(`#restaurant-content-${tableRowNum}`).html(formHtml)
  $('.show-create-wing-form').hide()
}

const showChangePasswordForm = function () {
  $('#change-password-div').html(`<form id="change-password-form">
        <input type="password" name="passwords[old]" placeholder="Old Password">
        <input type="password" name="passwords[new]" placeholder="New Password">
        <button type="submit">Change Password</button>
      </form>
      <button id="cancel-change-password-button">Cancel</button>
      <hr>`)
  $('#change-password-div').show()
}

const hideChangePasswordForm = function () {
  $('#change-password-div').html('')
}

// Searchbar heavily inspired by this https://www.w3schools.com/howto/howto_js_filter_table.asp

const searchbar = function () {
  const input = document.getElementById('searchbar')
  const filter = input.value.toUpperCase()
  const table = document.getElementById('wings-table')
  const tableRows = table.getElementsByClassName('restaurant-row')

  for (let i = 0; i < tableRows.length; i++) {
    const tableData = tableRows[i].getElementsByTagName('td')[0]
    if (tableData) {
      const textValue = tableData.textContent
      if (textValue.toUpperCase().indexOf(filter) > -1) {
        tableRows[i].style.display = ''
      } else {
        tableRows[i].style.display = 'none'
      }
    }
  }
}

module.exports = {
  showRestaurantForm,
  showCreateWingForm,
  showWingForm,
  showChangePasswordForm,
  hideChangePasswordForm,
  searchbar
}
