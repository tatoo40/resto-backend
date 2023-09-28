const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.MYSQLDATABASE , process.env.MYSQLUSER, process.env.MYSQLPASSWORD, {
  host: process.env.MYSQLHOST,
  dialect: process.env.MYSQLDIALECT,
  port: process.env.MYSQLPORT
  });


module.exports = sequelize;




