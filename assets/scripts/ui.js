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
  $('.hide-sign-forms').hide()
  $('#change-password').show()
  $('#sign-out').show()
  store.user = data.user
}

const onSignInFailure = function (data) {
  console.log(data)
  $('.input').val('')
}

const onSignOutSuccess = function (data) {
  console.log('success')
  $('.hide-sign-forms').show()
  $('#sign-out').hide()
  $('#change-password').hide()
}

const onSignOutFailure = function (data) {
  console.log('failure')
}

const changePasswordSuccess = () => {
  console.log('success')
}

const changePasswordFailure = () => {
  console.log('failure')
}

const createPlayerSuccess = (data) => {
  store.player = data.player
}

const createPlayerFailure = (data) => {
  console.log(data)
}

const getPlayersSuccess = function (data) {
  console.log(data)
  $('#get-players').hide()
  const showPlayers = showPlayersHtml({ players: data.players })
  $('.content').append(showPlayers)
  store.player = data.player
  $('.remove').on('click', (event) => {
    $(event.target).parent().parent().hide()
  })
}

const getPlayersFailure = function () {
  console.log('failuire')
}

const userIndexSuccess = function (data) {
  console.log(data)
  const showUserPlayers = showUserPlayersHtml({ fantasy_players: data.fantasy })
  $('.create-content').append(showUserPlayers)
  store.fantasy = data.fantasy
}

const userIndexFailure = function () {
  console.log('failuire')
}

const addUserPlayerSuccess = (data) => {
  store.user.player = data.user.player
}

const addUserPlayerFailure = (data) => {
  console.log(data)
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
  addUserPlayerFailure
}
