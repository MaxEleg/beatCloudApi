'use strict';

var noteRoutes = require('../../src/lib/routes/public/note');

module.exports = function publicApi(app) {
  app.post('/auth', function(req, res) {
    app.models.User.login({
      'username': req.body.username,
      'password': req.body.password,
    }, 'user', function(err, result) {
      if (err) {
        res.status(400).json(err);
        return;
      }
      res.json({
        status: 'OK',
        msg: 'Vous etes authentifié',
        'token': result.id,
      });
    });
  });
};
