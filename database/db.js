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
    allowNull: false
  },
  sync: { force: true }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('MYSQL connection has been established...');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const User = sequelize.define('user', {
  userId: { type: Sequelize.INTEGER, primaryKey: true },
  userName: { type: Sequelize.STRING(100) }
});

User.sync();

const Project = sequelize.define('project', {
  projectId: { type: Sequelize.INTEGER, primaryKey: true },
  projectName: { type: Sequelize.STRING }
});

Project.belongsTo(User, { foreignKey: 'ownerId' });
Project.sync();

const Updates = sequelize.define('update', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  title: { type: Sequelize.STRING },
  body: { type: Sequelize.STRING },
  likes: { type: Sequelize.INTEGER },
  pubDate: { type: Sequelize.INTEGER }
});

Updates.belongsTo(User, { foreignKey: 'postedBy' });
Updates.belongsTo(Project, { foreignKey: 'projectId' });
Updates.sync();
// .then(() => {
//   Updates.findAll().then(updates => console.log(updates));
// });

// let Users = sequelize.define('users', {

// })