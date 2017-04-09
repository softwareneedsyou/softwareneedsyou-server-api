/**
 * Created by Tristan on 09/04/2017.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Chapter', {
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
        story_id: {
            type: DataTypes.BIGINT,
            references: {
                model: require('./Story'),
                key: 'id'
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
