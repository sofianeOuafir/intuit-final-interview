const request = require('supertest');
const { Player } = require('../database/models')

const app = process.env.NODE_BACKEND_URL;

async function clearTables() {
  await Player.destroy({ where: {}, truncate: true }); // Clear the Players table
}

beforeAll(async () => {
  await clearTables();
});

afterAll(async () => {
  await clearTables();
});

describe('GET /api/players', () => {
  beforeAll(async () => {
    const players = [{
      playerID: 'testplayer10',
      birthYear: 1990,
      birthMonth: 1,
      birthDay: 1,
      birthCountry: 'USA',
      birthState: 'CA',
      birthCity: 'Los Angeles',
      nameFirst: 'John',
      nameLast: 'Doe',
      nameGiven: 'John Doe',
      weight: 180,
      height: 72,
      bats: 'R',
      throws: 'R',
      debut: '2010-04-01',
      retroID: 'doej001',
      bbrefID: 'doej001'
    }, {
      playerID: 'testplayer12',
      birthYear: 1990,
      birthMonth: 1,
      birthDay: 1,
      birthCountry: 'USA',
      birthState: 'CA',
      birthCity: 'Los Angeles',
      nameFirst: 'John',
      nameLast: 'Doe',
      nameGiven: 'John Doe',
      weight: 180,
      height: 72,
      bats: 'R',
      throws: 'R',
      debut: '2010-04-01',
      retroID: 'doej001',
      bbrefID: 'doej001'
    }, {
      playerID: 'testplayer13',
      birthYear: 1990,
      birthMonth: 1,
      birthDay: 1,
      birthCountry: 'USA',
      birthState: 'CA',
      birthCity: 'Los Angeles',
      nameFirst: 'John',
      nameLast: 'Doe',
      nameGiven: 'John Doe',
      weight: 180,
      height: 72,
      bats: 'R',
      throws: 'R',
      debut: '2010-04-01',
      retroID: 'doej001',
      bbrefID: 'doej001'
    }];

    await Player.bulkCreate(players); // Use Sequelize to insert multiple players
  })

  it('should return all players if no pagination parameters are passed', async () => {
    const res = await request(app).get('/api/players');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toEqual(3);
  });

  it('should return paginated players', async () => {
    const res = await request(app).get('/api/players?page=1&limit=2');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeLessThanOrEqual(2);
  });
});

describe('GET /api/player/:id', () => {
  it('should return a single player by ID', async () => {
    const player = await Player.create({
      playerID: 'testplayer01',
      birthYear: 1990,
      birthMonth: 1,
      birthDay: 1,
      birthCountry: 'USA',
      birthState: 'CA',
      birthCity: 'Los Angeles',
      nameFirst: 'John',
      nameLast: 'Doe',
      nameGiven: 'John Doe',
      weight: 180,
      height: 72,
      bats: 'R',
      throws: 'R',
      debut: '2010-04-01',
      retroID: 'doej001',
      bbrefID: 'doej001'
    });

    const res = await request(app).get(`/api/player/${player.id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', player.id);
  });

  it('should return 404 if player not found', async () => {
    const res = await request(app).get('/api/player/999999');
    expect(res.statusCode).toEqual(404);
  });
});

describe('POST /api/players', () => {
  it('should create a new player', async () => {
    const newPlayer = {
      playerID: 'newplayer01',
      birthYear: 1990,
      birthMonth: 1,
      birthDay: 1,
      birthCountry: 'USA',
      birthState: 'CA',
      birthCity: 'Los Angeles',
      nameFirst: 'Jane',
      nameLast: 'Doe',
      nameGiven: 'Jane Doe',
      weight: 160,
      height: 68,
      bats: 'L',
      throws: 'L',
      debut: '2011-04-01T00:00:00.000Z',
      retroID: 'doej002',
      bbrefID: 'doej002'
    };

    const res = await request(app)
      .post('/api/players')
      .send(newPlayer);

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.playerID).toEqual(newPlayer.playerID);
  });
});
