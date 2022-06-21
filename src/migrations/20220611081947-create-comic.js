'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      alternativeName: {
        type: Sequelize.STRING
      },
      synopsis: {
        type: Sequelize.STRING
      },
      demography: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      releaseDate: {
        type: Sequelize.DATE
      },
      endingDate: {
        type: Sequelize.DATE
      },
      type: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      readingSense: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      coverImage: {
        type: Sequelize.STRING
      },
      backgroundImage: {
        type: Sequelize.STRING
      },
      createdUser: {
        allowNull: false,
        type: Sequelize.STRING
      },
      updatedUser: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('comics');
  }
};