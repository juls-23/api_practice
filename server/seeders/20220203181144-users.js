'use strict';

const generateUser = key =>({
  first_name: `Elon${key+1}`,
  last_name:`Musk${key+1}`,
  email:`email${key+1}@gmail.com`,
  password_hash:'Elon123',
  created_at:new Date(),
  updated_at:new Date()
});

const generateUsers = (amount=20) =>{
  return new Array(amount).fill(null).map((u, i)=>generateUser(i));
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', generateUsers(20), {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
