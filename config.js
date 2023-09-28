const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.MYSQLDATABASE , process.env.MYSQLUSER, process.env.MYSQLPASSWORD, {
  host: process.env.MYSQLHOST,
  dialect: 'mysql',
  port: process.env.MYSQLPORT
  });


module.exports = sequelize;

//MYSQLDATABASE='ordenesDb'
//MYSQLUSER='doadmin'
//MYSQLPASSWORD='AVNS_nBVS3bB_iMfsbgiV9vU'/
//MYSQLHOST= 'db-mysql-nyc3-75302-do-user-14322278-0.b.db.ondigitalocean.com'


