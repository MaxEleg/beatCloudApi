module.exports = function(app) {
  return function(req, res, next) {
    var accessToken = app.models.AccessToken;

    if (!req.query.token) {
      res.status(400).json({msg: 'Token no provided'});
      return;
    }
  };
};
