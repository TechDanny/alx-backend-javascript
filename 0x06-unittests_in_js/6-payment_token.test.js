const getPaymentTokenFromAPI = require('./6-payment_token.js');
const chai = require('chai');
const expect = chai.expect;

describe('Async tests with done', function () {
    describe('check if argument is true', function () {
      it('payment token', function (done) {
        getPaymentTokenFromAPI(true)
          .then((res) => {
            expect(res).to.include({ data: 'Successful response from the API' });
            done();
          })
          .catch((err) => done(err));
      });
    });
  });