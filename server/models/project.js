const Sequelize = require('sequelize');
const db = require('../database/db');
const User = require('./user');

const Project = db.define('project', {
  projectName: Sequelize.STRING
});

Project.belongsTo(User, { foreignKey: 'ownerId' });

module.exports = Project;
