'use strict'
const store = require('./store')

const onSignUpSuccess = function (data) {
  console.log(data)
}

const onSignUpFailure = function (data) {
  console.log(data)
}

const onSignInSuccess = function (data) {
  console.log('Sign In Success!')
  console.log(data)
  store.user = data.user
}

const onSignInFailure = function (data) {
  console.log(data)
}

const onSignOutSuccess = function (data) {
  console.log('success')
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

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
