var express = require('express');

module.exports = function staticInit(app) {
  app.use('/', express.static(__dirname + '/../../static/app'));
  app.use('/:page', express.static(__dirname + '/../../static/app'));
};
