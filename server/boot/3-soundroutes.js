'use strict';

var multer = require('multer');
var loggedMiddleWare = require('../../controllers/middlewares/logged');

module.exports = function upload(app) {
  var storage = multer.diskStorage({
    // destination
    destination: function(req, file, cb) {
      cb(null, './uploads/sound');
    },
    filename: async function(req, file, cb) {
      try {
        var newSound = app.models.Sound({name: file.originalname});
        newSound.userId = req.user.id;
        newSound = await newSound.save();
        cb(null, newSound.id.toString());
      } catch (ex) {
        cb(ex);
      }
    }
  });
  var upload = multer({storage: storage});

  app.post('/sound/upload', loggedMiddleWare(app));
  app.post('/sound/uploads', loggedMiddleWare(app));

  app.post('/sound/upload', upload.single('file'), function(req, res) {
    res.json(req.file);
  });

  app.post('/uploads', upload.array('files'), function(req, res) {
    res.json(req.files);
  });
};
