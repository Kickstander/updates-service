const Models = require('../models');
module.exports = {
  create: (req, res) => {
    Models.Update.createInstance(req.body)
      .then(() => res.sendStatus(201))
      .catch(e => res.status(500).json(e));
  },
  read: (req, res) => {
    // something happens here
    Models.Update.getAll()
      .then(updates => res.json(updates))
      .catch(e => res.status(500).json(e));
  },
  update: (req, res) => {
    // something happens here
    Models.Update.updateInstance(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => res.status(500).json(e));
  },
  delete: (req, res) => {
    Models.Update.delete(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => res.status(500).json(e));
  }
};
