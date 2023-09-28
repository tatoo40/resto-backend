const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql', // u otro dialecto, dependiendo de tu base de datos
  username: 'doadmin',
  password: 'AVNS_nBVS3bB_iMfsbgiV9vU',
  host: 'db-mysql-nyc3-75302-do-user-14322278-0.b.db.ondigitalocean.comhost', // o la dirección de tu servidor de base de datos
  database: 'ordenesDb',

});

module.exports = sequelize;

