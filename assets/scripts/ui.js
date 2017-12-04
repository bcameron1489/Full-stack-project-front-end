'use strict'
const store = require('./store')
const showPlayersHtml = require('./templates/show-players-html.hbs')
const showUserPlayersHtml = require('./templates/show-user-players.hbs')
const getSingleResource = require('./templates/get-single-resource.hbs')

const clearAlerts = function () {
  $('.update-alert').html('')
  $('.user-alerts').html('')
  $('.alerts').html('')
}

const onSignUpSuccess = function () {
  clearAlerts()
  $('.alerts').text('Successfully Signed Up')
  $('.signup').val('')
}

const onSignUpFailure = function () {
  clearAlerts()
  $('.alerts').text('Failed To Signed Up')
  $('.input').val('')
}

const onSignInSuccess = function (data) {
  clearAlerts()
  $('.alerts').text('Successfully Signed In')
  $('.input').val('')
  $('.login-forms').hide()
  $('.show-login').hide()
  $('.auth-content').show()
  $('.client-forms').show()
  store.user = data.user
}

const onSignInFailure = function (data) {
  clearAlerts()
  $('.alerts').text('Failed To Sign In')
  $('.input').val('')
}

const onSignOutSuccess = function (data) {
  clearAlerts()
  $('.alerts').text('Successfully Signed Out')
  $('.update-alert').html('')
  $('.user-alerts').html('')
  $('.create-content').html('')
  $('.content').html('')
  $('.input').val('')
  $('.clear-input').val('')
  $('.login-forms').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('.show-login').show()
  $('.client-forms').hide()
}

const onSignOutFailure = function (data) {
  clearAlerts()
  $('.alerts').text('Failed To Sign Out')
}

const changePasswordSuccess = function () {
  clearAlerts()
  $('.alerts').text('Successfully Changed Password')
  $('.input').val('')
}

const changePasswordFailure = function () {
  clearAlerts()
  $('.alerts').text('Failed To Change Password')
  $('.input').val('')
}

const getPlayersSuccess = function (data) {
  clearAlerts()
  $('.alerts').text('Successfully Retrieved Players')
  $('.clear-input').html('')
  const showPlayers = showPlayersHtml({ players: data.players })
  $('.content').html('')
  $('.content').append(showPlayers)
  store.player = data.player
  $('.remove').on('click', function (event) {
    $(event.target).parent().parent().hide()
  })
}

const getSinglePlayerSuccess = function (data) {
  clearAlerts()
  $('.alerts').text('Successfully Retrieved Single Resource')
  $('.clear-input').val('')
  const singleResource = getSingleResource({ players: data })
  $('.content').html('')
  $('.content').append(singleResource)
  $('.remove').on('click', function (event) {
    $(event.target).parent().parent().hide()
  })
}

const getSinglePlayerFailure = function (data) {
  clearAlerts()
  $('.alerts').text('Successfully Retrieved Single Resource')
}

const getPlayersFailure = function () {
  clearAlerts()
  $('.alerts').text('Failed To Get Index')
}

const userIndexSuccess = function (data) {
  clearAlerts()
  $('.user-alerts').text('Successfully Retrieved Your Players')
  const showUserPlayers = showUserPlayersHtml({ fantasy_players: data.fantasy_players })
  $('.create-content').html('')
  $('.create-content').append(showUserPlayers)
}

const userIndexFailure = function () {
  clearAlerts()
  $('.alerts').text('Failed To Get Your Players')
}

const addUserPlayerSuccess = function (data) {
  clearAlerts()
  $('.alerts').text('Successfully Added Player')
  $('.clear-input').val('')
  store.fantasy = data.fantasy
}

const addUserPlayerFailure = function (data) {
  clearAlerts()
  $('.alerts').text('Failed To Add Player')
}

const deletePlayerSuccess = function (data) {
  clearAlerts()
  $('.update-alert').text('Successfully Removed Player')
  $('.clear-input').val('')
}

const deletePlayerFailure = function (data) {
  clearAlerts()
  $('.alerts').text('Failed To Remove Player')
}

const updatePlayerSuccess = function (data) {
  clearAlerts()
  $('.clear-input').val('')
  $('.create-content').html('')
  $('.update-alert').text('Successfully Updated Target')
  const showUserPlayers = showUserPlayersHtml({ fantasy_players: data.fantasy_players })
  $('.create-content').append(showUserPlayers)
  store.fantasy = data.fantasy
}

const updatePlayerFailure = function (data) {
  clearAlerts()
  $('.input').val('')
  $('.alerts').text('Failed To Update')
  store.fantasy = data.fantasy
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  getPlayersSuccess,
  getPlayersFailure,
  getSinglePlayerSuccess,
  getSinglePlayerFailure,
  userIndexSuccess,
  userIndexFailure,
  addUserPlayerSuccess,
  addUserPlayerFailure,
  deletePlayerSuccess,
  deletePlayerFailure,
  updatePlayerFailure,
  updatePlayerSuccess
}
