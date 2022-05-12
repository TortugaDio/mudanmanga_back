'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {

    static associate(models) {
      // define association here
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
  return user;
};