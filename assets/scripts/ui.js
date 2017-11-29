'use strict'

const onSignUpSuccess = function (data) {
  $('.alerts').html('Thank you for signing up!')
}

module.exports = {
  onSignUpSuccess
}
