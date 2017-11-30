'use strict'

const onSignUpSuccess = function (data) {
  console.log(data)
}

const onSignUpFailure = function (data) {
  console.log(data)
}

const onSignInSuccess = function (data) {
  console.log(data)
}

const onSignInFailure = function (data) {
  console.log(data)
}

const onSignOutSuccess = function (data) {
  console.log(data)
}

const onSignOutFailure = function (data) {
  console.log(data)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
}
