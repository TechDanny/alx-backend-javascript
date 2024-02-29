const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const sendPaymentRequestToApi = require('./3-payment.js');
const utils = require('./utils');

describe('Spy test', function () {
    it('Test math is the same', () => {
      const spyU = sinon.spy(utils, 'calculateNumber');
      const spyC = sinon.spy(console, 'log');
  
      sendPaymentRequestToApi(50, 30);
  
      expect(spyU.calledOnceWithExactly('SUM', 50, 30)).to.be.true;
      expect(spyC.calledOnceWithExactly('The total is: 80')).to.be.true;
  
      spyU.restore();
      spyC.restore();
    });
  });