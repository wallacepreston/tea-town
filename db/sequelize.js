const Sequelize = require('sequelize');

// connects to the db on localhost
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './tea.sqlite',
});

module.exports = sequelize;
