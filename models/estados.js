'use strict';
module.exports = (sequelize, DataTypes) => {
    const Estado = sequelize.define('estado', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            allowNull: false,
            type: DataTypes.CHAR
        },
       
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'estados',
        classMethods: {}
    });
    Estado.associate = function(models) {
    // associations can be defined here
    };
    return Estado;
};