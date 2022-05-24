'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('profiles', [
      {
        name: 'Administrator',
        code:'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Editor',
        code:'EDITOR',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Moderator',
        code:'MODERATOR',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Reader',
        code: 'READER',
        createdAt: new Date(),
        updatedAt: new Date()
      }  
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('profiles', null, {});
  }
};
