const request = require('supertest');
const app = require('../index.js');
const server = require('../index');

afterAll((done) => {
    server.close(done);
});

describe('Heroes', () => {
    // Applies only to tests in this describe block
    beforeEach(() => {
      console.log("testeando");
    });
  
    test('Vienna <3 veal', () => {
      expect(1).toBe(2 - 1);
    });
  
    test('San Juan <3 plantains', () => {
      expect(2+2).toBe(4);
    });
  });