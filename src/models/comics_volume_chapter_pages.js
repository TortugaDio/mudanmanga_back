'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comics_volume_chapter_pages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  comics_volume_chapter_pages.init({
    comicid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'comics_volume_chapter_pages',
  });
  return comics_volume_chapter_pages;
};