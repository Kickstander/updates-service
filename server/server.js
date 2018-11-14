// EXPRESS DEPENDENCIES
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
// require('dotenv').config({ path: path.resolve(__dirname, `../../${process.env.NODE_ENV}.env`) });
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
  .post(Controllers.Update.create)
  .get(Controllers.Update.read)
  .put(Controllers.Update.update)
  .delete(Controllers.Update.delete);

app.listen(PORT, () => {
  console.log(`Listening at PORT: ${PORT}`);
});
