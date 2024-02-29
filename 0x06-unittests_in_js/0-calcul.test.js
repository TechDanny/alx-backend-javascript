const calculateNumber = require('./0-calcul');
const assert = require('assert')

describe('calculateNumber', function() {
  it('Test with two whole numbers', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('Test with 1 float number and integer', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('Test with two float numbers', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('Test with 2 float numbers', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
