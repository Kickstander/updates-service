const Sequelize = require('sequelize');
const db = require('../database/db');

const User = db.define('user', {
  userName: Sequelize.STRING(100)
});

module.exports = User;
