const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const sendPaymentRequestToApi = require('./5-payment');

describe('Hooks.', function () {
  let spyC;
  beforeEach(function () {
    spyC = sinon.spy(console, 'log');
  });

  afterEach(function () {
    spyC.restore();
  });

  it('120 with 100, 20.', () => {
    sendPaymentRequestToApi(100, 20);

    expect(spyC.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(spyC.calledOnce).to.be.true;
  });

  it('20 with 10, 10.', () => {
    sendPaymentRequestToApi(10, 10);

    expect(spyC.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(spyC.calledOnce).to.be.true;
  });
});