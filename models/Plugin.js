/**
 * Created by Tristan on 09/04/2017.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Plugin', {
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
        type_id: {
            type: DataTypes.BIGINT,
            references: {
                model: require('./PluginType'),
                key: 'id'
            }
        },
        description: {
            type: DataTypes.TEXT
        },
        createAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP') //sequelize.literal('NOW()')
        }
    }, {
        underscored: true,
        freezeTableName: true,
        timestamps: true
    });
};
