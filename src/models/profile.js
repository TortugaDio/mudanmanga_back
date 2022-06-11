'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profile extends Model {

    static associate(models) {
      // define association here
    }
  }
  profile.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'profile',
    tableName: 'profiles'
  });
  return profile;
};