const initOptions = {
  connect(client) {
    const cp = client.connectionParameters;
    // eslint-disable-next-line no-console
    console.log('Connected to database', cp.database);
  },
  query(e) {
    // eslint-disable-next-line no-console
    console.log('QUERY:', e.query);
  }
};
const pgp = require('pg-promise')(initOptions);

const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DATABASE,
  DB_PORT,
} = process.env;

const connOptions = {
  host: DB_HOST,
  port: DB_PORT,
  database: DATABASE,
  user: DB_USER,
  password: DB_PASSWORD,
  max: 10,
  min: 0,
};

const db = pgp(connOptions);

module.exports = db;
