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

const Update = sequelize.define('update', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  title: { type: Sequelize.STRING },
  body: { type: Sequelize.TEXT },
  likes: { type: Sequelize.INTEGER },
  pubDate: { type: Sequelize.DATE }
});

Update.belongsTo(User, { foreignKey: 'postedBy' });
Update.belongsTo(Project, { foreignKey: 'projectId' });
Update.sync();

exports.User = User;
exports.Project = Project;
exports.Update = Update;
