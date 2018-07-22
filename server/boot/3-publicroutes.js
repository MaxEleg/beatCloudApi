'use strict';
const fileSystem = require('fs');
const path = require('path');

module.exports = function publicRoutes(app) {
  app.get('/public/musics', async function(req, res) {
    try {
      var musics = await app.models.Music.find({});
      for (let music of musics) {
        music.artistName = (await app.models.User.findById(music.userId)).artistName;
      }

      res.json(musics);
    } catch (ex) {
      res.json(ex);
    }
  });

  app.get('/public/content/:uid', async function(req, res) {
    try {
      var file = await app.models.File.findOne({
        where: {
          uid: req.params.uid
        }
      });
      if (!file) {
        res.status(400).json({msg: "Merci de verifier l'uid"});
        return;
      }

      var filePath = path.join(__dirname, '../../uploads/' + file.type + '/' + file.uid);
      var stat = fileSystem.statSync(filePath);

      var mimeType = file.file.mimetype;

      if (mimeType === 'audio/wave') {
        mimeType = 'audio/x-wav';
      }

      res.writeHead(200, {
        'Content-Type': mimeType,
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

  app.get('/publics/plugins', async function(req, res) {
    var plugins = await app.models.File.find({where: {type: 'plugin'}});
    res.json(plugins);
  });
};
