'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      playerID: {
        type: Sequelize.STRING,
      },
      nameFirst: {
        type: Sequelize.STRING,
      },
      nameLast: {
        type: Sequelize.STRING,
      },
      birthYear: {
        type: Sequelize.INTEGER,
      },
      birthMonth: {
        type: Sequelize.INTEGER,
      },
      birthDay: {
        type: Sequelize.INTEGER,
      },
      birthCountry: {
        type: Sequelize.STRING,
      },
      birthState: {
        type: Sequelize.STRING,
      },
      birthCity: {
        type: Sequelize.STRING,
      },
      deathYear: {
        type: Sequelize.INTEGER,
      },
      deathMonth: {
        type: Sequelize.INTEGER,
      },
      deathDay: {
        type: Sequelize.INTEGER,
      },
      deathCountry: {
        type: Sequelize.STRING,
      },
      deathState: {
        type: Sequelize.STRING,
      },
      deathCity: {
        type: Sequelize.STRING,
      },
      nameGiven: {
        type: Sequelize.STRING,
      },
      weight: {
        type: Sequelize.INTEGER,
      },
      height: {
        type: Sequelize.INTEGER,
      },
      bats: {
        type: Sequelize.STRING,
      },
      throws: {
        type: Sequelize.STRING,
      },
      debut: {
        type: Sequelize.DATE,
      },
      finalGame: {
        type: Sequelize.DATE,
      },
      retroID: {
        type: Sequelize.STRING,
      },
      bbrefID: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Players');
  }
};
