const Sequelize = require('sequelize');
const mysql = require('mysql');
const loginInfo = require('./db.env.config');
const generateAllSeedData = require('./seedingUtils');

const data = generateAllSeedData(100);

const sequelize = new Sequelize({
  database: loginInfo.database,
  username: loginInfo.user,
  password: loginInfo.password,
  host: 'localhost',
  dialect: 'mysql',
  define: {
    allowNull: false
  },
  sync: { force: true }
});

const User = sequelize.define('user', {
  userName: Sequelize.STRING(100)
});
const Project = sequelize.define('project', {
  projectName: Sequelize.STRING
});
Project.belongsTo(User, { foreignKey: 'ownerId' });
const Update = sequelize.define('update', {
  title: Sequelize.STRING,
  body: Sequelize.TEXT,
  likes: Sequelize.INTEGER,
  pubDate: Sequelize.DATE
});
Update.belongsTo(User, { foreignKey: 'postedBy' });
Update.belongsTo(Project, { foreignKey: 'projectId' });

function seedDatabase() {
  sequelize
    .authenticate()
    .then(() => {
      console.log('MYSQL connection has been established...');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  User.sync()
    .then(() => {
      return Project.sync();
    })
    .then(() => {
      return Update.sync();
    })
    .then(() => User.bulkCreate(data.users))
    .then(() => Project.bulkCreate(data.projects))
    .then(() => Update.bulkCreate(data.updates))
    .catch(err => console.error(err));
}

const connection = mysql.createConnection(loginInfo);
connection.connect();
connection.query('DROP DATABASE if exists kickstarter;', dropErr => {
  if (dropErr) {
    return console.error(dropErr);
  }
  console.log('"kickstarter" database dropped');
  connection.query('CREATE DATABASE kickstarter;', createErr => {
    if (createErr) {
      return console.error(createErr);
    }
    console.log('NEW "kickstarter" database created!');
    connection.end();
    seedDatabase();
    return undefined;
  });
  return undefined;
});

module.exports = { User, Project, Update };
