'use strict';

var noteRoutes = require('../../src/lib/routes/public/note');

module.exports = function publicApi(app) {
  app.post('/account/register',async function(req, res) {
    try{
      var User = app.models.User;
      await User.create(req.body);
      res.json({msg: "Compte créé"});
    } catch(ex){
      console.error(ex);
      res.status(400).json({msg: ex.message});
    }
  });

  app.post('/account/login', function(req, res) {
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

  app.get('/account/logout', function(req, res) {
    var token = req.query.token;
    if (!token) {
      return res.status(401).json({msg: 'Aucun token fourni'});
    }
    app.models.User.logout(token, function(err) {
      if (err) return res.json({msg: 'Une erreur est survenue'});
      res.json({
        msg: 'Vous etes déconnecté',
      });
    });
  });
};
