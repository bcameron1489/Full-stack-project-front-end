'use strict'
const store = require('./store')

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

const createPlayerFailure = (error) => {
  console.log('failure')
  return error
}

const getPlayersSuccess = function (data) {
  console.log(data)
}

const getPlayersFailure = function () {
  console.log('failuire')
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
  getPlayersFailure
}
