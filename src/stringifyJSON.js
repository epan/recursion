// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// High-level plan
// 1. Be able to detect what data type each node is
// 2. Based on data type, format/decorate string version
// 3. Traverse (across and into) entire JSON input
// 4. Build up string as traversing and then return it


// 1. Be able to detect what data type each node is

var classifyObject = function(input) {
  if (Array.isArray(input)) {
    return 'array';
  }
  if (input === null) {
    return 'null';
  }
  return 'object';
};

var classifyType = function(input) {
  // if input is object, detect the object and return type
  if (typeof input === 'object') {
    return classifyObject(input);
  }
  // if input is primitive, return type
  return typeof input;
};

// ORIGINAL FUNCTION

var stringifyJSON = function(obj) {

};
