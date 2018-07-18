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
          var newFile = app.models.File({
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
          cb(null, newFile.id.toString());
        } catch (ex) {
          cb(ex);
        }
      }
    }
  };

  var storageSound = multer.diskStorage(getUploader('sound'));

  var storageMusic = multer.diskStorage(getUploader('music'));

  return{
    sound: multer({storage: storageSound}),
    music: multer({storage: storageMusic})
  }
};
