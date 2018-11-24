const db = require('../database/db');

const Update = {
  getAll: async (projectId) => {
    const query = 'SELECT * FROM updates WHERE projectid = $1';
    return db.any(query, projectId);
  },
};

module.exports = Update;
