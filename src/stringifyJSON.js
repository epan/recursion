// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// High-level plan
// 1. Be able to detect what data type each node is
// 2. Based on data type, format/decorate primitive string version
// 3. Format/decorate array
// 4. Format/decorate object
// 5. Traverse (across and into) entire JSON input
// 6. Build up string as traversing and then return it


// 1. Be able to detect what data type each node is

var classifyObject = function(obj) {
  if (Array.isArray(obj)) {
    return 'array';
  }
  if (obj === null) {
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

// 2. Based on data type, format/decorate primitive string version

// Definitions of types for purposes of string decoration
var rejectTypes = ['function', 'undefined'];
var plainTypes = ['boolean', 'number', 'null'];
var quoteTypes = ['string'];
var bracketTypes = ['array'];
var curlyBraceTypes = ['object'];
var objects = ['array', 'object'];

var decoratePrimitives = function(input) {
  if (plainTypes.includes(classifyType(input))) {
    return `${input}`;
  }
  if (quoteTypes.includes(classifyType(input))) {
    return `"${input}"`;
  }
};

// 3. Format/decorate array

// 4. Format/decorate object

var stringifyObject = function(obj) {
  var resultObj = '{';
  var pairs = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var pair = `"${key}":`;
      if (classifyType(obj[key]) === 'object') {
        pair += `${stringifyObject(obj[key])}`;
      }
      if (!objects.includes(classifyType(obj[key]))) {
        pair += `${decoratePrimitives(obj[key])}`;
      }
      pairs.push(pair);
    }
  }
  resultObj += pairs.join(',') + '}';
  return resultObj;
};

// ORIGINAL FUNCTION

var stringifyJSON = function(obj) {
  var type = classifyType(obj);
  if (rejectTypes.includes(type)) {
    return;
  }
  if (type !== 'object') {
    return decoratePrimitives(obj);
  }
  if (type === 'object') {
    return stringifyObject(obj);
  }
};
