// custom test cases
describe('custom unit stingifyJSON tests', function() {
  it('should stringify plain primitives', function() {});
  it('should stringify flat arrays', function() {});
  it('should stringify flat objects', function() {});
  it('should stringify objects with nested objects', function() {});
  it('should stringify arrays with nested arrays', function() {});
  it('should stringify arrays with nested objects', function() {});
  it('should stringify objects with nested arrays', function() {});
});

// test cases are described in fixtures.js
describe('stringifyJSON', function() {
  it('should match the result of calling JSON.stringify', function() {

    stringifiableObjects.forEach(function(test) {
      var expected = JSON.stringify(test);
      var result = stringifyJSON(test);
      expect(result).to.equal(expected);
    });

    unstringifiableValues.forEach(function(obj) {
      var expected = JSON.stringify(obj);
      var result = stringifyJSON(obj);
      expect(result).to.equal(expected);
    });

  });
});
