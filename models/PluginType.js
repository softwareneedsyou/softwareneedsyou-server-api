/**
 * Created by Tristan on 09/04/2017.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('PluginType', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                //len: [1,50]
            }
        },
        description: {
            type: DataTypes.TEXT
        }
    }, {
        underscored: true,
        freezeTableName: true
    });
};
