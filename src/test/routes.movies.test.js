const assert = require('assert');
const proxyquire = require('proxyquire');
const { MoviesServiceMock } = require('../utils/mocks/movies.js');
const testServer = require('../utils/testServer');

describe('routes - movies', function() {
  const route = proxyquire('../routes/movies.routes.js', {
    '../services/movies.js': MoviesServiceMock
  });
  const request = testServer(route);
  describe('GET /movies', function() {
    it('should respond with status 200', function(done) {
      request.get('/movies').expect(200, done);
    });
  });
});
