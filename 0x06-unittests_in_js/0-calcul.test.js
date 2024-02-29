const calculateNumber = require('./0-calcul');
const assert = require('assert')

describe('Test with two whole numbers', function() {
  it('Answer is 4', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
});
describe('Test with whole number and float', function() {
  it('Answer is 5', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
});
describe('Test with two float numbers', function() {
  it('Answer is 5', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
});
describe('Test with two float numbers', function() {
  it('Answer is 6', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
