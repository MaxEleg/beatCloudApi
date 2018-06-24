module.exports = function publicApi(app) {
  app.post('/account/register', async function (req, res) {
    try {
      var User = app.models.User;
      console.log('>>>>', JSON.stringify(req.body));
      User.email = req.body.mail;
      res.json({msg: "Compte créé"});
    } catch (ex) {
      console.error(ex);
      res.status(400).json({msg: ex.message});
    }
  }

)
  ;
  app.post('/account/login', async function(req, res) {
    try{
      var login = await app.models.User.login({
        username: req.body.username,
        password: req.body.password
      }, 'user');

      res.json({
        status: 'OK',
        msg: 'Vous etes authentifié',
        user:  await login.user.get(),
        token: login.id
      });
    } catch(ex){
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
