const DATABASE = 'kickstarter';
const USERNAME = 'root';

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  database: DATABASE,
  username: USERNAME,
  password: null,
  host: 'localhost',
  dialect: 'mysql',
  define: {
    freezeTableName: true,
    notNull: true
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('MYSQL connection has been established...');
  })
  .catch(err => {
    console.err('Unable to connect to the database:', err);
  });

let Updates = sequelize.define('updates', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  title: { type: Sequelize.STRING },
  posted_by: { type: Sequelize.STRING },
  project: { type: Sequelize.STRING },
  body: { type: Sequelize.STRING },
  likes: { type: Sequelize.INTEGER },
  pub_date: { type: Sequelize.INTEGER }
});

Updates.sync().then(() => {
  Updates.findAll().then(updates => console.log(updates));
});