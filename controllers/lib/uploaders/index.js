const multer = require('multer');
const fs = require('fs');

function _isWaveFile(file) {
  var names = file.split('.');
  return names[names.length - 1] === 'wav';
}

module.exports = function(app){

  var getUploader = function(type) {
    return {
      destination: function(req, file, cb) {
        var dir = __dirname + '/../../../uploads/' + type;

        if (!fs.existsSync(dir)){
          fs.mkdirSync(dir);
        }
        cb(null, dir);
      },
      filename : async function (req, file, cb) {

        try {
          var newFile = new app.models.File({
            name: file.originalname,
            type: type,
            userId: req.user.id,
            file: file
          });
          newFile.uid = newFile.getUid(req.user, file.originalname);
          newFile.userId = req.user.id;

          if (!_isWaveFile(file.originalname)) {
            cb(new Error('Seul les fichiers wav sont supportés par la plateforme'));
            return;
          }

          newFile = await newFile.save();
          cb(null, newFile.uid);
        } catch (ex) {
          cb(ex);
        }
      }
    }
  };


  var uploaderMusic = getUploader('music');
  uploaderMusic.filename = async function (req, file, cb) {
    try {

      if (!_isWaveFile(file.originalname)) {
        cb(new Error('Seul les fichiers wav sont supportés par la plateforme'));
        return;
      }
      console.log(req.headers);
      var newMusic = new app.models.Music({
        name: req.headers.name,
        userId: req.user.id,
        soundsId: JSON.parse(req.headers.sounds)
      });

      var newFile = new app.models.File({
        name: file.originalname,
        type: 'music',
        userId: req.user.id,
        file: file
      });
      newFile.uid = newFile.getUid(req.user, file.originalname);
      newFile.userId = req.user.id;


      newFile = await newFile.save();

      newMusic.fileId = newFile.id;
      await newMusic.save();

      cb(null, newFile.uid);
    } catch (ex) {
      cb(ex);
    }
  };

  var storageSound = multer.diskStorage(getUploader('sound'));
  var storageMusic = multer.diskStorage(uploaderMusic);
  var storageImage = multer.diskStorage(getUploader('image'));



  return{
    sound: multer({storage: storageSound}),
    music: multer({storage: storageMusic}),
    image: multer({storage: storageImage}),
  }
};
