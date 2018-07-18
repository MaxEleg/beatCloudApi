'use strict';
const loggedMiddleWare = require('../../controllers/middlewares/logged');
const uploadersLib = require('../../controllers/lib/uploaders');
const crypto = require('crypto');
const fileSystem = require('fs');
const path = require('path');

module.exports = function upload(app) {
  const uploaders = uploadersLib(app);

  app.post('/sound/upload', loggedMiddleWare(app));

  app.post('/sound/upload', uploaders.sound.single('file'), function(req, res) {
    res.json(req.file);
  });

  app.post('/music/upload', uploaders.music.single('music'), function(req, res) {
    res.json(req.file);
  });

  app.get('/sounds/user', loggedMiddleWare(app), async function(req, res) {
    try {
      var sounds = await app.models.File.find({
        where: {type: 'sound', userId: req.user.id}
      });

      var user = await app.models.User.findById(req.user.id);

      sounds.map(sound=>sound.artistName = user.artistName);

      res.json(sounds);
    } catch (ex) {
      console.log(ex);
      res.json(ex);
    }
  });
  app.post('/sound/edit/:id', loggedMiddleWare(app), async function(req, res) {
    var sound = await app.models.File.findOne({where: {id: req.params.id, type: 'sound'}});
    if (sound.userId !== req.user.id) {
      res.status(400).json({msg: "Vous n'avez aucun droit sur cet instrument"});
    }
    sound.name = req.body.name;
    res.json({
      sound: await sound.save()
    });
  });

  app.get('/sound/load/:uid', async function(req, res) {
    try {
      var sound = await app.models.File.findOne({
        where: {
          uid: req.params.uid
        }
      });

      if (!sound) {
        res.status(400).json({msg: "Merci de verifier l'uid"});
        return;
      }

      var filePath = path.join(__dirname, '../../uploads/sound/' + sound.id);
      var stat = fileSystem.statSync(filePath);

      res.writeHead(200, {
        'Content-Type': 'audio/x-wav',
        'Content-Length': stat.size
      });

      var readStream = fileSystem.createReadStream(filePath);
      // We replaced all the event handlers with a simple call to readStream.pipe()
      readStream.pipe(res);
    } catch (ex) {
      console.log(ex);
      res.status(400).json({msg: 'Une erreur est survenue.'});
    }
  });
};
