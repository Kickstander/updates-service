// EXPRESS DEPENDENCIES
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
// DATABASE DEPENDENCY
const initializeSequelize = require('../database/db.js');

const app = express();

const port = 3004;

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

app.listen(port, () => {
  console.log(`Listening at PORT: ${port}`);
});
