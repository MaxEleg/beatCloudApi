'use strict';

var noteRoutes = require('../../src/lib/routes/public/note');

module.exports = function publicApi(app) {
  var User = app.models.User;
  User.defineProperty('email', {type: 'string', required: 'Ce mail est déjà associé à un compte'});
  User.defineProperty('firstName', {type: 'string', required: 'Merci de rentrer un Prénom'});
  User.defineProperty('lastName', {type: 'string', required: 'Merci de rentrer un Prénom'});
};
