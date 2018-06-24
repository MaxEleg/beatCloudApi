'use strict';

var multer = require('multer');

module.exports = function upload(app) {

  var storage = multer.diskStorage({
    // destination
    destination: function(req, file, cb) {
      cb(null, './public/uploads/');
    },
    filename: async function(req, file, cb) {
      try {
        var Note = app.models.Note({name : file.originalname});
        var newNote =  await (new Note()).save();
        cb(null, file.originalname);
      } catch(ex){
        console.err(ex);
        res.status(400).json({ msg: "Une erreur s'est produite"});
      }
    }
  });
  var upload = multer({storage: storage});

  app.post('/uploads', upload.array('uploads[]', 1), function(req, res) {
    res.send(req.files);
  });
  app.get('/uploads', function(req, res) {
    res.send('');
  });
};
