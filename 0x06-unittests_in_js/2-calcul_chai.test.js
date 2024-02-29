const calculateNumber = require('./2-calcul');
const expect = require('expect')

describe('Test sum of float numbers', function() {
  it('Answer is 6', function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.be.equal(6);
  });
});
describe('Test subtraction of two float numbers', function() {
  it('Answer is -4', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4);
  });
});
describe('Test Divide two float numbers', function() {
  it('Answer is 0.2', function() {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.equal(0.2);
  });
});
describe('Test Divide float number with zero', function() {
  it('Answer is ERROR', function() {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.be.equal('ERROR');
  });
});
