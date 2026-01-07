const app = require('./app');
const supertest = require('supertest');
describe('App', () => {
  it('should return hello', async () => {
    await supertest(app).get('/').expect(200).then(response => {
      expect(response.text).toBe('Hello CI/CD!');
    });
  });
});
