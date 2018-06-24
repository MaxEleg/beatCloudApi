var config = require('../config');

var mongodb = {
  host: config.mongodb.host,
  port: config.mongodb.port,
  url: 'mongodb://esgi:esgi123123@ds235239.mlab.com:35239/beatcloud',
  database: config.mongodb.database,
  password: config.mongodb.password,
  name: 'mongodb',
  user: config.mongodb.user,
  connector: 'mongodb',
};

module.exports = {
  db: {
    name: 'db',
    connector: 'memory',
  },
  mongodb: mongodb,
};
