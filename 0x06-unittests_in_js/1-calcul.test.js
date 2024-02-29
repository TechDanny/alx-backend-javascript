const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('Test sum of float numbers', function() {
  it('Answer is 6', function() {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });
});
describe('Test subtraction of two float numbers', function() {
  it('Answer is -4', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
});
describe('Test Divide two float numbers', function() {
  it('Answer is 0.2', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
});
describe('Test Divide float number with zero', function() {
  it('Answer is ERROR', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'ERROR');
  });
});
