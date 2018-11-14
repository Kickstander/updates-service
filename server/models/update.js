const Sequelize = require('sequelize');
const db = require('../database/db');
const User = require('./user');
const Project = require('./project');

const Update = db.define('update', {
  title: Sequelize.STRING,
  body: Sequelize.TEXT,
  likes: Sequelize.INTEGER,
  pubDate: Sequelize.DATE
});
Update.belongsTo(User, { foreignKey: 'postedBy' });
Update.belongsTo(Project, { foreignKey: 'projectId' });

Update.createInstance = updateObj => Update.create(updateObj);

Update.getAll = projectId => Update.findAll({ where: { projectId } });

Update.getById = id => Update.findOne({ where: { id } });

Update.getByTitle = title => Update.findOne({ where: { title } });

Update.updateInstance = updateObj => Update.update({ updateObj }, { where: { id: updateObj.id } });

Update.delete = id => Update.destroy({ where: { id } });

module.exports = Update;
