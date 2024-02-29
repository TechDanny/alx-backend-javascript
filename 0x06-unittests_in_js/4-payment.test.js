const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const stub = sinon.stub;

const sendPaymentRequestToApi = require('./4-payment.js');
const utils = require('./utils');

describe('stub test', function () {
    it('Test math is the same', () => {
      const stubU = stub(utils, 'calculateNumber');
      stubU.returns(10);
      const spyC = sinon.spy(console, 'log');
  
      sendPaymentRequestToApi(50, 30);
  
      expect(stubU.calledOnceWithExactly('SUM', 50, 30)).to.be.true;
      expect(spyC.calledOnceWithExactly('The total is: 10')).to.be.true;
  
      stubU.restore();
      spyC.restore();
    });
  });