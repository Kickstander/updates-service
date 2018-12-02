const redis = require('redis');
const Promise = require('bluebird');

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

const options = {
  host: 'redis',
};

const client = redis.createClient(options);

client.on('error', err => console.log('Cache Error:', err));

module.exports = client;
