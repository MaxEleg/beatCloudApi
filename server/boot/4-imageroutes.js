'use strict';
const loggedMiddleWare = require('../../controllers/middlewares/logged');
const uploadersLib = require('../../controllers/lib/uploaders');
const fileSystem = require('fs');
const path = require('path');

module.exports = function upload(app) {
  const uploaders = uploadersLib(app);

  app.post('/image/upload', loggedMiddleWare(app));

  app.post('/image/upload', uploaders.image.single('image'), function(req, res) {
    res.json(req.file);
  });
};
