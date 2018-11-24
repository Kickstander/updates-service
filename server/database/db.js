const initOptions = {
  connect(client, dc, useCount) {
    const cp = client.connectionParameters;
    console.log('Connected to database', cp.database);
  },
};
const pgp = require('pg-promise')(initOptions);

const { 
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_PORT,
} = process.env;

const connOptions = {
  host: DB_HOST,
  port: DB_PORT,
  database: 'kickstander',
  user: DB_USER,
  password: DB_PASSWORD,
  max: 10,
  min: 0,
};

const db = pgp(connOptions);

module.exports = db;
