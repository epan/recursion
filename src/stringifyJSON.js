// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// High-level plan
// 1. Be able to detect what data type each node is
// 2. Based on data type, format/decorate primitive string version
// 3. Format/decorate array
// 4. Format/decorate object


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
var objectTypes = [].concat(bracketTypes, curlyBraceTypes);
var primitiveTypes = [].concat(plainTypes, quoteTypes);

var decoratePrimitives = function(input) {
  var type = classifyType(input);
  if (plainTypes.includes(type)) {
    return `${input}`;
  }
  if (quoteTypes.includes(type)) {
    return `"${input}"`;
  }
};

// 3. Format/decorate array

function stringifyArray(arr) {
  var values = [];
  arr.forEach(function(element) {
    var value = '';
    var type = classifyType(element);
    if (type === 'array') {
      value += stringifyArray(element);
    }
    if (type === 'object') {
      value += stringifyObject(element);
    }
    if (primitiveTypes.includes(type)) {
      value += decoratePrimitives(element);
    }
    if (!rejectTypes.includes(type)) {
      values.push(value);
    }
  });
  return '[' + values.join(',') + ']';
}

// 4. Format/decorate object

function stringifyObject(obj) {
  var pairs = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var type = classifyType(obj[key]);
      var pair = '';
      if (type === 'object') {
        pair += `"${key}":${stringifyObject(obj[key])}`;
      }
      if (type === 'array') {
        pair += `"${key}":${stringifyArray(obj[key])}`;
      }
      if (primitiveTypes.includes(type)) {
        pair += `"${key}":${decoratePrimitives(obj[key])}`;
      }
      if (!rejectTypes.includes(type)) {
        pairs.push(pair);
      }
    }
  }
  return '{' + pairs.join(',') + '}';
}

// ORIGINAL FUNCTION

var stringifyJSON = function(obj) {
  var type = classifyType(obj);
  if (rejectTypes.includes(type)) {
    return;
  }
  if (primitiveTypes.includes(type)) {
    return decoratePrimitives(obj);
  }
  if (type === 'object') {
    return stringifyObject(obj);
  }
  if (type === 'array') {
    return stringifyArray(obj);
  }
};
