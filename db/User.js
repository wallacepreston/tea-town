const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

const User = sequelize.define('user', {
  name: Sequelize.STRING
});

module.exports = User;
