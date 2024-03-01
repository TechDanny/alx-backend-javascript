const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Basic Integration testing', () => {
  describe('home route', () => {
    it('correct status code', (done) => {
      const opt = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

      request(opt, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});