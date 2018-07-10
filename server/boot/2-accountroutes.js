module.exports = function publicApi(app) {
  app.post('/account/register', async function(req, res) {
    try {
      var User = app.models.User;
      var newUser = new User(req.body);
      await newUser.save();

      var login = await app.models.User.login({
        username: req.body.username,
        password: req.body.password,
      }, 'user');

      var user = await login.user.get();

      if (user.banned) {
        res.status(400).json({msg: "Vous etes banni, l'authentification a la plateforme est refusée"});
        return;
      }

      res.json({
        user: user
      });
    } catch (ex) {
      res.status(400).json(ex);
    }
  }

)
  ;
  app.post('/account/login', async function(req, res) {
    try {
      var login = await app.models.User.login({
        username: req.body.username,
        password: req.body.password,
      }, 'user');

      res.json({
        status: 'OK',
        msg: 'Vous etes authentifié',
        user: await login.user.get(),
        token: login.id,
      });
    } catch (ex) {
      console.log(ex);
      res.status(400).json(ex);
    }
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
