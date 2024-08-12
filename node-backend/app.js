const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { Player } = require('./database/models');
const app = express();

const port = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// GET /api/players with pagination
app.get('/health', async (req, res) => {
  res.status(200).send('OK, it works!');
});

// GET /api/players with pagination
app.get('/api/players', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10; // Default limit to 10 if not provided
    const offset = (page - 1) * limit;

    const players = await Player.findAll({
      limit,
      offset
    });

    res.json(players);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


// GET /api/player/:id
app.get('/api/player/:id', async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id);

    if (!player) {
      return res.status(404).send('Player not found');
    }

    res.json(player);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// POST /players - Create a new player
app.post('/api/players', async (req, res) => {
  const {
    playerID,
    birthYear,
    birthMonth,
    birthDay,
    birthCountry,
    birthState,
    birthCity,
    deathYear,
    deathMonth,
    deathDay,
    deathCountry,
    deathState,
    deathCity,
    nameFirst,
    nameLast,
    nameGiven,
    weight,
    height,
    bats,
    throws,
    debut,
    finalGame,
    retroID,
    bbrefID
  } = req.body;

  try {
    const player = await Player.create({
      playerID,
      birthYear,
      birthMonth,
      birthDay,
      birthCountry,
      birthState,
      birthCity,
      deathYear,
      deathMonth,
      deathDay,
      deathCountry,
      deathState,
      deathCity,
      nameFirst,
      nameLast,
      nameGiven,
      weight,
      height,
      bats,
      throws,
      debut,
      finalGame,
      retroID,
      bbrefID
    });

    res.status(201).json(player);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
