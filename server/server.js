// EXPRESS DEPENDENCIES
require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const Controllers = require('./controllers');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/:projectId', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.route('/api/projects/:projectId/updates')
  .get(Controllers.Update.read);
// .post(Controllers.Update.create)
// .put(Controllers.Update.update)
// .delete(Controllers.Update.delete);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at PORT: ${PORT}`);
});
