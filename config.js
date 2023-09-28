const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('ordenesDb', 'doadmin', 'AVNS_nBVS3bB_iMfsbgiV9vU', {
  host: 'db-mysql-nyc3-75302-do-user-14322278-0.b.db.ondigitalocean.com',
  dialect: 'mysql',
  port: '25060'
  });


module.exports = sequelize;

//MYSQLDATABASE='ordenesDb'
//MYSQLUSER='doadmin'
//MYSQLPASSWORD='AVNS_nBVS3bB_iMfsbgiV9vU'/
//MYSQLHOST= 'db-mysql-nyc3-75302-do-user-14322278-0.b.db.ondigitalocean.com'


