const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

// $(event.target).attr('data-id')
const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
//  User actions

const onGetPlayers = function (event) {
  event.preventDefault()
  api.getPlayers()
    .then(ui.getPlayersSuccess)
    .catch(ui.getPlayersFailure)
}

const onGetSinglePlayer = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.getSinglePlayer(data)
    .then(ui.getSinglePlayerSuccess)
    .catch(ui.getSinglePlayerFailure)
}

const onDeletePlayer = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.deletePlayer(data)
    .then(ui.deletePlayerSuccess)
    .then(api.indexUserPlayers)
    .then(ui.userIndexSuccess)
    .catch(ui.deletePlayerFailure)
}

const onUserPlayersIndex = function (event) {
  event.preventDefault()
  api.indexUserPlayers()
    .then(ui.userIndexSuccess)
    .catch(ui.userIndexFailure)
}

const onAddUserPlayer = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.addUserPlayer(data)
    .then(ui.addUserPlayerSuccess)
    .then(api.indexUserPlayers)
    .then(ui.userIndexSuccess)
    .catch(ui.addUserPlayerFailure)
}

const onUpdatePlayer = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.updatePlayer(data)
    .then(ui.updatePlayerSuccess)
    .then(api.indexUserPlayers)
    .then(ui.userIndexSuccess)
    .catch(ui.updatePlayerFailure)
}

const hideAuthForms = function () {
  $('.auth-content').hide()
}

hideAuthForms()

const hideClientForms = function () {
  $('.client-forms').hide()
}

hideClientForms()

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#get-players').on('submit', onGetPlayers)
  $('#get-single-player').on('submit', onGetSinglePlayer)
  $('#user-players').on('submit', onUserPlayersIndex)
  $('#add-user-player').on('submit', onAddUserPlayer)
  $('.delete-resource-player').on('submit', onDeletePlayer)
  $('#update-user').on('submit', onUpdatePlayer)
  $('.show-login').on('click', function () {
    $('.login-forms').show()
  })
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onGetPlayers,
  onGetSinglePlayer,
  onUpdatePlayer,
  addHandlers,
  onUserPlayersIndex,
  onAddUserPlayer,
  onDeletePlayer
}
