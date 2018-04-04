'use strict';

var noteRoutes = require('../../src/lib/routes/public/note');

module.exports = function publicApi(app) {
  app.get('/note/:id', function(req, res) {
    noteRoutes.getById(app, req, res);
  });
};
