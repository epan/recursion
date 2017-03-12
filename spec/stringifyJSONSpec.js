// custom test cases
describe('custom unit stingifyJSON tests', function() {
  it('should stringify plain primitives', function() {
    primitives.forEach(function(test) {
      var expected = JSON.stringify(test);
      var actual = stringifyJSON(test);
      expect(actual).to.equal(expected);
    });
  });
  it('should stringify flat arrays', function() {
    flatArrays.forEach(function(test) {
      var expected = JSON.stringify(test);
      var actual = stringifyArray(test);
      expect(actual).to.equal(expected);
    });
  });
  it('should stringify flat objects', function() {
    flatObjects.forEach(function(test) {
      var expected = JSON.stringify(test);
      var actual = stringifyObject(test);
      expect(actual).to.equal(expected);
    });
  });
  it('should stringify objects with nested objects', function() {
    objectsWithinObjects.forEach(function(test) {
      var expected = JSON.stringify(test);
      var actual = stringifyJSON(test);
      expect(actual).to.equal(expected);
    });
  });
  it('should stringify arrays with nested arrays', function() {
    arraysWithinArrays.forEach(function(test) {
      var expected = JSON.stringify(test);
      var actual = stringifyJSON(test);
      expect(actual).to.equal(expected);
    });
  });
  it('should stringify arrays with nested objects', function() {
    objectsWithinArrays.forEach(function(test) {
      var expected = JSON.stringify(test);
      var actual = stringifyJSON(test);
      expect(actual).to.equal(expected);
    });
  });
  it('should stringify objects with nested arrays', function() {
    arraysWithinObjects.forEach(function(test) {
      var expected = JSON.stringify(test);
      var actual = stringifyJSON(test);
      expect(actual).to.equal(expected);
    });
  });
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
