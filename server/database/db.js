const Sequelize = require('sequelize');
const loginInfo = require('./db.env.config');

const sequelize = new Sequelize({
  database: loginInfo.database,
  username: loginInfo.user,
  password: loginInfo.password,
  host: loginInfo.host,
  dialect: 'mysql',
  define: {
    allowNull: false
  }
});

module.exports = sequelize;
