'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          length: {
            min: 3,
            max: 20
          }
        }
      },
      
      middleName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          length: {
            min: 3,
            max: 20
          }
        }
      },

      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          length: {
            min: 3,
            max: 20
          }
        }
      },

      email:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isEmail: true
        }
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          length: {
            min: 8,
            max: 20,
            message: 'Password must be between 8 and 20 characters'
          },
          matches: {
            args: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/],
            message: 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
          }
        }
      },

      nickname: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
          length: {
            min: 4,
            max: 10
          }
        }
      },

      photo: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
          //isUrl: true
        },
      },

      deleteAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};