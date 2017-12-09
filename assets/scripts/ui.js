'use strict'
const store = require('./store')
const showPlayersHtml = require('./templates/show-players-html.hbs')
const showUserPlayersHtml = require('./templates/show-user-players.hbs')
const getSingleResource = require('./templates/get-single-resource.hbs')

const onSignUpSuccess = function () {
  $('.alerts').text('Successfully Signed Up')
  $('.signup').val('')
}

const onSignUpFailure = function () {
  $('.alerts').text('Failed To Signed Up')
  $('.signup').val('')
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
  $('.clear-input').html('')
  const showPlayers = showPlayersHtml({ players: data.players })
  $('.content').html('')
  $('.content').append(showPlayers)
  store.data = data.players
  $('.remove').on('click', function (event) {
    $(event.target).parent().parent().hide()
  })
}

const getSinglePlayerSuccess = function (data) {
  if ($('.clear-input-single').val() !== '') {
    $('.alerts').text('Successfully Retrieved Single Resource')
    const singleResource = getSingleResource({ players: data })
    $('.clear-input-single').val('')
    $('.content').html('')
    $('.content').append(singleResource)
    $('.remove').on('click', function (event) {
      $(event.target).parent().parent().hide()
    })
  } else {
    return getSinglePlayerFailure()
  }
}

const getSinglePlayerFailure = function (data) {
  $('.clear-input-single').val('')
  $('.alerts').text('Failed to get single reosource')
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
  $('.clear-input').val('')
  store.fantasy = data.fantasy
  store.data = data.user
}

const addUserPlayerFailure = function (data) {
  $('.alerts').text('Failed To Add Player')
}

const deletePlayerSuccess = function (data) {
  $('.update-alert').text('Successfully Removed Player')
  $('.clear-input').val('')
}

const deletePlayerFailure = function (data) {
  $('.update-alert').text('Failed To Remove Player')
}

const updatePlayerSuccess = function (data) {
  $('.clear-input').val('')
  $('.create-content').html('')
  $('.update-alert').text('Successfully Updated Target')
  const showUserPlayers = showUserPlayersHtml({ fantasy_players: data.fantasy_players })
  $('.create-content').append(showUserPlayers)
  store.fantasy = data.fantasy
  store.data = data.user
}

const updatePlayerFailure = function (data) {
  $('.input').val('')
  $('.update-alert').text('Failed To Update')
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
