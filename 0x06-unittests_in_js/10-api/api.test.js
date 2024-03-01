const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('integration test', () => {
  const url = 'http://localhost:7865';

  it('GET / returns response', (done) => {
    request.get(`${url}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id return correct valid :id', (done) => {
    request.get(`${url}/cart/18`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 18');
      done();
    });
  });

  it('GET /cart/:id returns 404', (done) => {
    request.get(`${url}/cart/-6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404', (done) => {
    request.get(`${url}/cart/d766-54a5-91a3`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('POST /login valid response', (done) => {
    request.post(`${url}/login`, {json: {userName: 'TechDanny'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome TechDanny');
      done();
    });
  });

  it('GET /available_payments valid response', (done) => {
    request.get(`${url}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});