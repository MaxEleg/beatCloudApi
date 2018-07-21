'use strict';
const loggedMiddleWare = require('../../controllers/middlewares/logged');
const uploadersLib = require('../../controllers/lib/uploaders');
const fileSystem = require('fs');
const path = require('path');

module.exports = function upload(app) {
  const uploaders = uploadersLib(app);

  app.post('/music/upload', loggedMiddleWare(app));
  app.post('/music/upload', uploaders.music.single('music'), function(req, res) {
    res.json(req.file);
  });

  app.post('/music/edit/:id', loggedMiddleWare(app), async function(req, res) {
    var sound = await app.models.File.findOne({where: {id: req.params.id, type: 'sound', userId: req.user.id}});
    if (!sound) {
      res.status(400).json({msg: 'Musique introuvable.'});
      return;
    }
    sound.name = req.body.name;
    res.json({
      sound: await sound.save()
    });
  });

  app.get('/music/user', loggedMiddleWare(app), async function(req, res) {
    try {
      var musicsUser = await app.models.Music.find({
        where: {userId: req.user.id}
      });
      var musics = [];

      for (let music of musicsUser) {
        var file = await app.models.File.findById(music.soundId);
        file.name = music.name;
        file.artistName = req.user.artistName;
        file.imageUrl = music.imageUrl;
        musics.push(file);
      }

      res.json(musics);
    } catch (ex) {
      console.log(ex);
      res.json(ex);
    }
  });
};
