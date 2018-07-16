'use strict';

var multer = require('multer');
var loggedMiddleWare = require('../../controllers/middlewares/logged');
const crypto = require('crypto');

function _isWaveFile(file) {
  var names = file.split('.');
  return names[names.length - 1] === 'wav';
}

function _hash(str) {
  const hash = crypto.createHash('sha256');
  return hash.digest('hex');
}
function _getUid(req, file) {
  return 'sound-' + req.user.id + '-' + Date.now() + '-' + _hash(file.originalname)
}
module.exports = function upload(app) {
  app.post('/sound/upload', loggedMiddleWare(app));

  var storage = multer.diskStorage({
    // destination
    destination: function(req, file, cb) {
      cb(null, './uploads/sound');
    },
    filename: async function(req, file, cb) {
      try {
        var newSound = app.models.Sound({
          name: file.originalname,
          type: 'sound',
          uid: _getUid(req, file),
          userId: req.user.id
        });
        newSound.userId = req.user.id;
        newSound.type = 'sound';

        if (! _isWaveFile(file.originalname)) {
          cb(new Error('Seul les fichiers wav sont supportés par la plateforme'));
          return;
        }

        newSound = await newSound.save();
        cb(null, newSound.id.toString());
      } catch (ex) {
        cb(ex);
      }
    }
  });
  var upload = multer({storage: storage});

  app.post('/sound/upload', upload.single('file'), function(req, res) {
    res.json(req.file);
  });

  app.post('/music/upload', upload.single('music'), function(req, res) {
    res.json(req.file);
  });

  app.get('/sounds/user', loggedMiddleWare(app), async function(req, res) {
    try {
      var sounds = await app.models.Sound.find({
        where: {type: 'sound', userId: req.user.id}
      });
      res.json(sounds);
    } catch (ex) {
      res.json(ex);
    }
  });
  app.post('/sound/edit/:id', loggedMiddleWare(app), async function(req, res) {
    var sound = await app.models.Sound.findById(req.params.id);
    if (sound.userId !== req.user.id) {
      res.status(400).json({msg: "Vous n'avez aucun droit sur cet instrument"});
    }
    sound.name = req.body.name;
    res.json({
      sound: await sound.save()
    });
  });
};
