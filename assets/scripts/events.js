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

const onCreatePlayer = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createPlayer(data)
    .then(ui.createPlayerSuccess)
    .catch(ui.createPlayerFailure)
}

const onGetPlayers = function (event) {
  event.preventDefault()
  api.getPlayers()
    .then(ui.getPlayersSuccess)
    .catch(ui.getPlayersFailure)
}

const onDeletePlayer = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.deletePlayer(data)
    .then(ui.deletePlayerSuccess)
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
  console.log(data)
  api.addUserPlayer(data)
    .then(ui.addUserPlayerSuccess)
    .catch(ui.addUserPlayerFailure)
}

const onUpdatePlayer = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.updatePlayer(data)
    .then(ui.addUserPlayerSuccess)
    .catch(ui.addUserPlayerFailure)
}

const hideSignForms = function () {
  $('.login-forms').hide()
}

hideSignForms()

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
  $('#add-player').on('submit', onCreatePlayer)
  $('#get-players').on('submit', onGetPlayers)
  $('#user-players').on('submit', onUserPlayersIndex)
  $('#add-user-player').on('submit', onAddUserPlayer)
  $('#delete-player').on('submit', onDeletePlayer)
  $('.show-login').on('click', function () {
    $('.login-forms').show()
  })
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCreatePlayer,
  onGetPlayers,
  onUpdatePlayer,
  addHandlers,
  onUserPlayersIndex,
  onAddUserPlayer,
  onDeletePlayer
}
