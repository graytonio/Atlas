const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DB_PATH || './src/db/inventory.db',
  logging: process.env.SQL_LOGGING === 'true' ? console.log : null,
});

const Service = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  icon: {
    type: DataTypes.STRING,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  remote: {
    type: DataTypes.STRING,
  },
});

module.exports = { sequelize, Service };
