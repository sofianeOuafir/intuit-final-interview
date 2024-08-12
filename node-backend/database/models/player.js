'use strict';

module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    playerID: {
      type: DataTypes.STRING,
    },
    nameFirst: DataTypes.STRING,
    nameLast: DataTypes.STRING,
    birthYear: DataTypes.INTEGER,
    birthMonth: DataTypes.INTEGER,
    birthDay: DataTypes.INTEGER,
    birthCountry: DataTypes.STRING,
    birthState: DataTypes.STRING,
    birthCity: DataTypes.STRING,
    deathYear: DataTypes.INTEGER,
    deathMonth: DataTypes.INTEGER,
    deathDay: DataTypes.INTEGER,
    deathCountry: DataTypes.STRING,
    deathState: DataTypes.STRING,
    deathCity: DataTypes.STRING,
    nameGiven: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    bats: DataTypes.STRING,
    throws: DataTypes.STRING,
    debut: DataTypes.DATE,
    finalGame: DataTypes.DATE,
    retroID: DataTypes.STRING,
    bbrefID: DataTypes.STRING,
  }, {
    timestamps: true,
  });
  return Player;
};
