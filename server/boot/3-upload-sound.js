'use strict';

var multer = require('multer');

module.exports = function upload(app) {
  var storage = multer.diskStorage({
    // destination
    destination: function(req, file, cb) {
      cb(null, './uploads/sound');
    },
    filename: async function(req, file, cb) {
      try {
        var newSound = app.models.Sound({name: file.originalname});
        newSound = await newSound.save();
        cb(null, newSound.id.toString());
      } catch (ex) {
        cb(ex);
      }
    }
  });
  var upload = multer({storage: storage});

  app.post('/upload', upload.array('files'), function(req, res) {
    res.send(req.files);
  });
};
