/**
 * Created by Tristan on 09/04/2017.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('User', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: DataTypes.STRING
        },
        lastname: {
            type: DataTypes.STRING
        },
        pseudo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                //len: [1,50]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notEmpty: true,
                //len: [1,255]
            }
        },
        password_hash: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.VIRTUAL, //ne sera jamais stockée dans la BDD
            allowNull: false,
            set: function (val) {
                this.setDataValue('password', val); // Remember to set the data value, otherwise it won't be validated
                this.setDataValue('password_hash', this.salt + val);
            },
            validate: {
                notEmpty: true,
                isLongEnough: function (val) {
                    if (val.length < 7) {
                        throw new Error("Please choose a longer password");
                    }
                }
            }
        },
        createAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP') //sequelize.literal('NOW()')
        }
    }, {
        underscored: true,
        freezeTableName: true,
        timestamps: true
    })
    .beforeUpdate(function(user, options, callback){
        user.email = user.email.toLowerCase();
    });
};
