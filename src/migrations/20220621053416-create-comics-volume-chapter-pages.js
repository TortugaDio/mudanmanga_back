'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comics_volume_chapter_pages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comic_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'comics',
          key: 'id'
        }
      },
      comic_volume_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'comics_volumes',
          key: 'id'
        }
      },
      comic_volume_chapter_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'comics_volume_chapters',
          key: 'id'
        }
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING
      },
      picture: {
        allowNull: true,
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
    await queryInterface.dropTable('comics_volume_chapter_pages');
  }
};