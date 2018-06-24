module.exports = function publicApi(app) {
  var User = app.models.User;
  User.defineProperty('email', {type: 'string', required: 'Ce mail est déjà associé à un compte'});
  User.defineProperty('firstName', {type: 'string', required: 'Merci de rentrer un prénom'});
  User.defineProperty('lastName', {type: 'string', required: 'Merci de rentrer un nom'});
  User.defineProperty('phone', {type: 'string', required: false});
  User.defineProperty('birthDate', {type: 'date', required: false});
};
