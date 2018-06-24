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
        cb(null, req.originalname);
      } catch(ex){
        console.log(ex);
        res.status(400).json({ msg: "Une erreur s'est produite"});
      }
    }
  });
  var upload = multer({storage: storage});

  app.post('/upload', upload.array('files[]', 27), function(req, res) {
    res.send(req.files);
  });
};
