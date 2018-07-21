'use strict';
const loggedMiddleWare = require('../../controllers/middlewares/logged');
const uploadersLib = require('../../controllers/lib/uploaders');


module.exports = function upload(app) {
  const uploaders = uploadersLib(app);

  app.post('/sound/upload', loggedMiddleWare(app));

  app.post('/sound/upload', uploaders.sound.single('file'), function(req, res) {
    res.json(req.file);
  });
  app.get('/sounds/user', loggedMiddleWare(app), async function(req, res) {
    try {
      var sounds = await app.models.File.find({
        where: {type: 'sound', userId: req.user.id}
      });
      sounds.map(sound=>sound.artistName = req.user.artistName);

      res.json(sounds);
    } catch (ex) {
      console.log(ex);
      res.json(ex);
    }
  });
  app.post('/sound/edit/:id', loggedMiddleWare(app), async function(req, res) {
    var sound = await app.models.File.findOne({where: {id: req.params.id, type: 'sound', userId: req.user.id}});
    if (!sound) {
      res.status(400).json({msg: 'Instrument introuvable.'});
      return;
    }
    sound.name = req.body.name;
    res.json({
      sound: await sound.save()
    });
  });

};
