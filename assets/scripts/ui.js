'use strict'
const store = require('./store')
const showPlayersHtml = require('./templates/show-players-html.hbs')
const showUserPlayersHtml = require('./templates/show-user-players.hbs')

const onSignUpSuccess = function () {
  console.log('Success!')
  $('.input').val('')
}

const onSignUpFailure = function () {
  console.log('Failure')
  $('.input').val('')
}

const onSignInSuccess = function (data) {
  console.log('Sign In Success!')
  $('.input').val('')
  $('.login-forms').hide()
  $('.show-login').hide()
  $('.auth-content').show()
  $('.client-forms').show()
  store.user = data.user
}

const onSignInFailure = function (data) {
  console.log(data)
  $('.input').val('')
}

const onSignOutSuccess = function (data) {
  console.log('success')
  $('.login-forms').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('.show-login').show()
  $('.client-forms').hide()
}

const onSignOutFailure = function (data) {
  console.log('failure')
}

const changePasswordSuccess = function () {
  console.log('success')
  $('.input').val('')
}

const changePasswordFailure = function () {
  console.log('failure')
  $('.input').val('')
}

const createPlayerSuccess = function (data) {
  console.log('add player success')
  console.log(data)
  store.player = data.player
}

const createPlayerFailure = function (data) {
  console.log(data)
}

const getPlayersSuccess = function (data) {
  console.log(data)
  const showPlayers = showPlayersHtml({ players: data.players })
  $('.content').append(showPlayers)
  store.player = data.player
  $('.remove').on('click', function (event) {
    $(event.target).parent().parent().hide()
  })
}

const getPlayersFailure = function () {
  console.log('failuire')
}

const userIndexSuccess = function (data) {
  console.log(data)
  console.log('success')
  const showUserPlayers = showUserPlayersHtml({ fantasy_players: data.fantasy_players })
  $('.create-content').append(showUserPlayers)
}

const userIndexFailure = function () {
  console.log('failuire')
}

const addUserPlayerSuccess = function (data) {
  console.log('success')
  store.fantasy = data.fantasy
}

const addUserPlayerFailure = function (data) {
  console.log(data)
}

const deletePlayerSuccess = function (data) {
  console.log(data)
  console.log('delete success')
}

const deletePlayerFailure = function (data) {
  console.log(data)
  console.log('delete failure')
}

const updatePlayerSuccess = function (data) {
  console.log('add player success')
  console.log(data)
  store.fantasy = data.fantasy
}

const updatePlayerFailure = function (data) {
  console.log('failure')
  console.log(data)
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
  createPlayerSuccess,
  createPlayerFailure,
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
