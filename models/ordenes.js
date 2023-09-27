'use strict';
module.exports = (sequelize, DataTypes) => {
    const Orden = sequelize.define('orden', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nro: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        fecha: {
            allowNull: true,
            defaultValue: 1,
            type: DataTypes.DATE
          
        },
        hora_iniciada: {
          allowNull: false,
          defaultValue: 1,
          type: DataTypes.TIME,
  
      },
      hora_preparacion: {
        allowNull: false,
        defaultValue: 1,
        type: DataTypes.TIME,

    },
    hora_finalizada: {
      allowNull: false,
      defaultValue: 1,
      type: DataTypes.TIME,

  },
  hora_entregada: {
    allowNull: false,
    defaultValue: 1,
    type: DataTypes.TIME,

},  
      idEstado: {
        allowNull: false,
        defaultValue: 1,
        type: DataTypes.INTEGER,
   
    },  
    presentacion: {
      allowNull: true,
      defaultValue: 0,
      type: DataTypes.INTEGER,
 
    },  
    porcion: {
        allowNull: true,
        defaultValue: 0,
        type: DataTypes.INTEGER,
   
      },  
      gusto: {
          allowNull: true,
          defaultValue: 0,
          type: DataTypes.INTEGER,
     
        } ,  
        temperatura: {
            allowNull: true,
            defaultValue: 0,
            type: DataTypes.INTEGER,
       
          }      

    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'ordenes',
        classMethods: {}
    });
    Orden.associate = function(models) {
    // associations can be defined here
    };
    return Orden;
};