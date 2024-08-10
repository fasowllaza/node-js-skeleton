'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      { title: 'The Whispering Shadows', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Echoes of the Lost City', createdAt: new Date(), updatedAt: new Date() },
      { title: 'The Enchanted Quill', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Journey Through the Abyss', createdAt: new Date(), updatedAt: new Date() },
      { title: 'The Hidden Atlas', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Secrets of the Forgotten Realm', createdAt: new Date(), updatedAt: new Date() },
      { title: 'The Clockwork Alchemist', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Mysteries of the Starbound Sky', createdAt: new Date(), updatedAt: new Date() },
      { title: 'The Phantom\'s Secret Diary', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Chronicles of the Silver Sword', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
