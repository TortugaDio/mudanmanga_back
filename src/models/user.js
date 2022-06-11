'use strict';
const {
  Model
} = require('sequelize');
const { encryptPassword } = require('../utils/strings')
module.exports = (sequelize, DataTypes) => {
  class user extends Model {

    static associate(models) {
    }

  }

  user.init({
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
    nickname:DataTypes.STRING,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });

  user.beforeCreate(async (user) => {
    user.password = encryptPassword(user.password)
  })

  user.afterCreate(async (user) => {
      
    
  })
  
  return user;
};