const showUpdateForm = function (event) {
  event.preventDefault()
  // get the id of the rest it's going to update
  const restId = $(event.target).data('restid')
  // target the line it's going to update
  const tableRowNum = $(event.target).data('table-row')
  // Going to make it into HTML forms
  const formHtml = `
  <td><form id="update-restaurant-form" data-restid="${restId}">
    <input name="restaurant[name]" type="text" placeholder="New Name">
    <input name="restaurant[website]" type="text" placeholder="New Website">
    <button id="update-restaurant-button" type="submit">Submit</button>
</form></td>
`
  $(`#wings-content-${tableRowNum}`).html(formHtml)
}

module.exports = {
  showUpdateForm
}
