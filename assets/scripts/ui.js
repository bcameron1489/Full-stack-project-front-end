'use strict'
const store = require('./store')
const showPlayersHtml = require('./templates/show-players-html.hbs')
const showUserPlayersHtml = require('./templates/show-user-players.hbs')

const onSignUpSuccess = function () {
  $('.alerts').text('Successfully Signed Up')
  $('.signup').val('')
}

const onSignUpFailure = function () {
  $('.alerts').text('Failed To Signed Up')
  $('.input').val('')
}

const onSignInSuccess = function (data) {
  $('.alerts').text('Successfully Signed In')
  $('.input').val('')
  $('.login-forms').hide()
  $('.show-login').hide()
  $('.auth-content').show()
  $('.client-forms').show()
  store.user = data.user
}

const onSignInFailure = function (data) {
  $('.alerts').text('Failed To Sign In')
  $('.input').val('')
}

const onSignOutSuccess = function (data) {
  $('.alerts').text('Successfully Signed Out')
  $('.create-content').html('')
  $('.content').html('')
  $('.input').val('')
  $('.login-forms').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('.show-login').show()
  $('.client-forms').hide()
}

const onSignOutFailure = function (data) {
  $('.alerts').text('Failed To Sign Out')
}

const changePasswordSuccess = function () {
  $('.alerts').text('Successfully Changed Password')
  $('.input').val('')
}

const changePasswordFailure = function () {
  $('.alerts').text('Failed To Change Password')
  $('.input').val('')
}

const getPlayersSuccess = function (data) {
  $('.alerts').text('Successfully Retrieved Players')
  const showPlayers = showPlayersHtml({ players: data.players })
  $('.content').html('')
  $('.content').append(showPlayers)
  store.player = data.player
  $('.remove').on('click', function (event) {
    $(event.target).parent().parent().hide()
  })
}

const getPlayersFailure = function () {
  $('.alerts').text('Failed To Get Index')
}

const userIndexSuccess = function (data) {
  $('.user-alerts').text('Successfully Retrieved Your Players')
  const showUserPlayers = showUserPlayersHtml({ fantasy_players: data.fantasy_players })
  $('.create-content').html('')
  $('.create-content').append(showUserPlayers)
}

const userIndexFailure = function () {
  $('.alerts').text('Failed To Get Your Players')
}

const addUserPlayerSuccess = function (data) {
  $('.alerts').text('Successfully Added Player')
  store.fantasy = data.fantasy
}

const addUserPlayerFailure = function (data) {
  $('.alerts').text('Failed To Add Player')
}

const deletePlayerSuccess = function (data) {
  $('.alerts').text('Successfully Removed Player')
}

const deletePlayerFailure = function (data) {
  $('.alerts').text('Failed To Remove Player')
}

const updatePlayerSuccess = function (data) {
  $('.input').val('')
  $('.create-content').html('')
  $('.alerts').text('Successfully Updated Target')
  const showUserPlayers = showUserPlayersHtml({ fantasy_players: data.fantasy_players })
  $('.create-content').append(showUserPlayers)
  store.fantasy = data.fantasy
}

const updatePlayerFailure = function (data) {
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
  userIndexSuccess,
  userIndexFailure,
  addUserPlayerSuccess,
  addUserPlayerFailure,
  deletePlayerSuccess,
  deletePlayerFailure,
  updatePlayerFailure,
  updatePlayerSuccess
}
