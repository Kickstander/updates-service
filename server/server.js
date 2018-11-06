// EXPRESS DEPENDENCIES
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
// DATABASE DEPENDENCY
const db = require('../database/db.js');

const app = express();

const port = 3004;

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/:projectId/updates', (req, res) => {
  db.Update.findAll({
    where: {
      projectId: req.params.projectId
    }
  }).then(updates => {
    res.send(updates);
  });
});

app.listen(port, () => {
  console.log(`Listening at PORT: ${port}`);
});
