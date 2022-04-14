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
</form><button id="delete-restaurant-button" data-restid="${restId}">Delete Restaurant</button></td>
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
</form></td>
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
    <button id="update-restaurant-button" type="submit">Create Wing</button>
</form></td>
`
  $(`#restaurant-content-${tableRowNum}`).html(formHtml)
}

module.exports = {
  showRestaurantForm,
  showCreateWingForm,
  showWingForm
}
