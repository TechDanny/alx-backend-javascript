const calculateNumber = require('./0-calcul');
const assert = require('assert')

describe('Test suit', function() {
  it('Test with two float numbers', function() {
    assert.strictEqual(calculateNumber(2.3, 2.7), 5);
  });it('Test with 1 float number and integer', function() {
    assert.strictEqual(calculateNumber(2, 2.7), 5);
  });
  it('Test with two whole numbers', function() {
    assert.strictEqual(calculateNumber(10, -9), 1);
  });
});
