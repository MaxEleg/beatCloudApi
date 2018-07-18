var logged = require('../../controllers/middlewares/logged');
var admin = require('../../controllers/middlewares/admin');

module.exports = function upload(app) {
  app.use('/admin/*', logged(app));
  app.use('/admin/*', admin(app));

  app.get('/admin/users', async function(req, res) {
    var users = await app.models.User.find({});
    res.json(users);
  });
  app.post('/admin/user/ban', async function(req, res) {
    var user = await app.models.User.findById(req.body.userId);
    console.log(user);
    user.banned = !user.banned;
    user = await user.save();
    res.json(user);
  });

  app.get('/admin/sounds', async function(req, res) {
    try {
      var sounds = await app.models.File.find({where: {type: 'sound'}});
      res.json(sounds);
    } catch (ex) {
      res.json(ex);
    }
  });

  app.post('/admin/sound/delete', async function(req, res) {
    try {
      var sound = await app.models.File.findById(req.body.soundId);
      await sound.destroy();
      res.json(sound);
    } catch (ex) {
      res.json(ex);
    }
  });
};
