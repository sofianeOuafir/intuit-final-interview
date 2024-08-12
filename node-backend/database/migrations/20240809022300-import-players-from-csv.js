'use strict';

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

module.exports = {
  async up(queryInterface, Sequelize) {
    const csvFilePath = path.join(__dirname, '..', 'data', 'players.csv'); // Update the path to your CSV file
    const players = [];

    return new Promise((resolve, reject) => {
      fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (row) => {
          players.push({
            playerID: row.playerID,
            birthYear: !isNaN(parseInt(row.birthYear)) ? parseInt(row.birthYear) : null, // Check for NaN
            birthMonth: !isNaN(parseInt(row.birthMonth)) ? parseInt(row.birthMonth) : null,
            birthDay: !isNaN(parseInt(row.birthDay)) ? parseInt(row.birthDay) : null,
            birthCountry: row.birthCountry || null,
            birthState: row.birthState || null,
            birthCity: row.birthCity || null,
            deathYear: !isNaN(parseInt(row.deathYear)) ? parseInt(row.deathYear) : null,
            deathMonth: !isNaN(parseInt(row.deathMonth)) ? parseInt(row.deathMonth) : null,
            deathDay: !isNaN(parseInt(row.deathDay)) ? parseInt(row.deathDay) : null,
            deathCountry: row.deathCountry || null,
            deathState: row.deathState || null,
            deathCity: row.deathCity || null,
            nameFirst: row.nameFirst || null,
            nameLast: row.nameLast || null,
            nameGiven: row.nameGiven || null,
            weight: !isNaN(parseInt(row.weight)) ? parseInt(row.weight) : null,
            height: !isNaN(parseInt(row.height)) ? parseInt(row.height) : null,
            bats: row.bats || null,
            throws: row.throws || null,
            debut: row.debut || null,
            finalGame: row.finalGame || null,
            retroID: row.retroID || null,
            bbrefID: row.bbrefID || null,
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        })
        .on('end', async () => {
          try {
            await queryInterface.bulkInsert('Players', players, {});
            resolve();
          } catch (error) {
            reject(error);
          }
        });
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Players', null, {});
  },
};
