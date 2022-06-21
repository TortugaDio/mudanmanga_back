'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  comic.init({
    name: DataTypes.STRING,
    alternativeName: DataTypes.STRING,
    synopsis: DataTypes.STRING,
    demography: DataTypes.STRING,
    genre: DataTypes.STRING,
    releaseDate: DataTypes.DATE,
    endingDate: DataTypes.DATE,
    type: DataTypes.STRING,
    author: DataTypes.STRING,
    status: DataTypes.STRING,
    readingSense: DataTypes.STRING,
    language: DataTypes.STRING,
    coverImage: DataTypes.STRING,
    backgroundImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comic',
  });
  return comic;
};