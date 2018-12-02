const Models = require('../models');
const cache = require('../cache/index');

module.exports = {
  // create: (req, res) => {
  //   Models.Update.createInstance(req.body)
  //     .then(() => res.sendStatus(201))
  //     .catch(e => res.status(500).json(e));
  // },
  read: (req, res) => {
    cache.getAsync(req.url)
      .then((results) => {
        if (results !== null) {
          res.set('Content-Type', 'application/json').send(results);
        } else {
          Models.Update.getAll(req.params.projectId)
            .then((updates) => {
              cache.setAsync(req.url, JSON.stringify(updates))
                .then(() => cache.expireAsync(req.url, 5));
              res.json(updates);
            })
            .catch(e => res.status(500).json(e));
        }
      });
  },
  // update: (req, res) => {
  //   // something happens here
  //   Models.Update.updateInstance(req.body)
  //     .then(() => res.sendStatus(200))
  //     .catch(e => res.status(500).json(e));
  // },
  // delete: (req, res) => {
  //   Models.Update.delete(req.body)
  //     .then(() => res.sendStatus(200))
  //     .catch(e => res.status(500).json(e));
  // },
};
