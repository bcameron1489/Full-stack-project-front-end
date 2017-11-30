'use strict'
const store = require('./store')

const onSignUpSuccess = function (data) {
  console.log(data)
}

const onSignUpFailure = function (data) {
  console.log(data)
}

const onSignInSuccess = function (data) {
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

const changePasswordSuccess = (data) => {
  console.log(data)
}

const changePasswordFailure = (data) => {
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
