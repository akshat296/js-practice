var R = require('./refactoredRamda')
var assert = require('assert');

describe('Should add with curry', function (){
  it('should return 5', function(){
    assert.equal(R.add(3,2),5);
  })
  it('should return 5 with curry', function(){
    assert.equal(R.add(3)(2),5);
  });
});

describe('Should return map', function (){
  it('should return 6,10,12', function(){
   assert.equal(JSON.stringify(R.map(x=>x*2,[3,5,6])),JSON.stringify([6,10,12]));
  })
  it('should return [6,10,12]', function(){
    console.log(R.map(x=>x*2)([3,5,6]));
    assert.equal(JSON.stringify(R.map(x=>x*2)([3,5,6])),JSON.stringify([6,10,12]));
  });
});