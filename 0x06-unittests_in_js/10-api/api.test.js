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

describe('GET /cart/18', () => {
    it('status code and id 18', (done) => {
      const opt = {
        url: 'http://localhost:7865/cart/18',
        method: 'GET',
      };

      request(opt, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 18');
        done();
      });
    });
  });
  describe('GET /cart/hello', () => {
    it('404', (done) => {
      const opt = {
        url: 'http://localhost:7865/cart/hello',
        method: 'GET',
      };

      request(opt, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
    it('POST /valid response', (done) => {
        request.post(`${url}/login`, {json: {userName: 'Danny'}}, (_err, res, body) => {
          expect(res.statusCode).to.be.equal(200);
          expect(body).to.be.equal('Welcome Danny');
          done();
        });
      });
    
      it('GET /available payments', (done) => {
        request.get(`${url}/available_payments`, (_err, res, body) => {
          expect(res.statusCode).to.be.equal(200);
          expect(JSON.parse(body))
            .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
          done();
        });
      });
  });