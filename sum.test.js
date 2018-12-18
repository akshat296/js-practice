var assert = require('assert'); 

var sum = require('./sum');
describe("sum", function() {
  it("adds two numer", function() {
    assert.equal(sum(2, 3), 5);
  });
});