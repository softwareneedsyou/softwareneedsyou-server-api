/**
 * Created by Tristan on 09/04/2017.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Score', {
        user_id: {
            type: DataTypes.BIGINT,
            references: {
                model: require('./User'),
                key: 'id'
            }
        },
        chapter_id: {
            type: DataTypes.BIGINT,
            references: {
                model: require('./Chapter'),
                key: 'id'
            }
        },
        at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP') //sequelize.literal('NOW()')
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        underscored: true,
        freezeTableName: true,
        timestamps: true
    });
};
