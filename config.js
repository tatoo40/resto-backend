const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: process.env.MYSQLDIALECT, // u otro dialecto, dependiendo de tu base de datos
  username: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  host: process.env.MYSQLHOST, // o la dirección de tu servidor de base de datos
  database: process.env.MYSQLDATABASE,

});

module.exports = sequelize;




