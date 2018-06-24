'use strict';

module.exports = function(app) {
  // Install a `/` route that returns server status
  var router = app.loopback.Router();
  router.get('/', app.loopback.status());
  app.use(router);

  app.use('/', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
};
