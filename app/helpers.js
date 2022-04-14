const showRestaurantForm = function (event) {
  event.preventDefault()
  // get the id of the rest it's going to update
  const restId = $(event.target).data('restid')
  // target the line it's going to update
  const tableRowNum = $(event.target).data('table-row')
  // Going to make it into HTML forms
  const formHtml = `
  <td><form id="restaurant-form" data-restid="${restId}">
    <input name="restaurant[name]" type="text" placeholder="New Name">
    <input name="restaurant[website]" type="text" placeholder="New Website">
    <button id="update-restaurant-button" type="submit">Submit</button>
</form><button id="delete-restaurant-button" data-restid="${restId}">Delete Restaurant</button><button class="cancel-button">Cancel</button></td>
`
  $(`#restaurant-content-${tableRowNum}`).html(formHtml)
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
}

const showWingForm = function (event) {
  const restId = $(event.target).data('restid')
  const wingId = $(event.target).data('wingid')
  const tableRowNum = $(event.target).data('table-row')
  const formHtml = `
  <td><form id="wing-form" data-restid="${restId}" data-wingid="${wingId}">
    <input name="wing[name]" type="text" placeholder="New Wing Name">
    <input name="wing[spiciness]" type="number" id="spiciness" min="1" max="100">
    <label for="spiciness">Spiciness (1-10)</label>
    <input name="wing[quality]" type="number" id="quality" min="1" max="100">
    <label for="quality">Quality (1-10)</label>
    <button id="update-restaurant-button" type="submit">Update Wing</button>
</form><button id="delete-wing-button" data-restid="${restId}" data-wingid="${wingId}">Delete Wing</button><button class="cancel-button">Cancel</button></td>
`
  $(`#restaurant-content-${tableRowNum}`).html(formHtml)
}

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
  searchbar
}
