// EXPRESS DEPENDENCIES
const express = require('express');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
// DATABASE DEPENDENCY
const initializeSequelize = require('../database/db.js');

const { HOST_PORT } = process.env;
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/:projectId', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.get('/:projectId/updates', (req, res) => {
  const { Update, sequelizeConnection, sequelize } = initializeSequelize();
  sequelizeConnection.then(() =>
    Update.findAll({
      where: {
        projectId: req.params.projectId
      }
    })
      .then(updates => res.send(updates))
      .then(() => sequelize.close())
      .catch(err => console.error(err))
  );
});

app.listen(HOST_PORT, () => {
  console.log(`Listening at PORT: ${HOST_PORT}`);
});
