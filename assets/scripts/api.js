'use strict'
const store = require('./store')

const config = require('./config')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const createPlayer = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/players',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getPlayers = function () {
  return $.ajax({
    url: config.apiOrigin + '/players',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const indexUserPlayers = function () {
  return $.ajax({
    url: config.apiOrigin + '/fantasy_players',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addUserPlayer = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/fantasy_players',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updatePlayer = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/fantasy_players',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deletePlayer = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/players/' + data.player.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createPlayer,
  getPlayers,
  indexUserPlayers,
  addUserPlayer,
  deletePlayer
}
