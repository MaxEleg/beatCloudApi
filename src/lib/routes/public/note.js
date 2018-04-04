'use strict';

const _getById = function(app, req, res) {
  app.models.Note.find({
    id: req.params.id,
  }, function(err, res) {
    if (err) {
      console.error(err);
      res.status(400).json({
        msg: 'An error occured',
      });
      return;
    }
    res.json(res);
  });
};
const _createNote = function(app, req, res) {
  app.models.Note.create(req.body, function(err, note) {
    if (err) {
      console.error(err);
      res.status(400).json({
        msg: 'An error occured',
      });
      return;
    }
    res.json(note);
  });
};

module.exports = {
  getById: _getById,
  createNote: _createNote,
};
