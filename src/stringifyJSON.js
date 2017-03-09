// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// High-level plan
// 1. Be able to detect what data type each node is
// 2. Based on data type, format/decorate string version
// 3. Traverse (across and into) entire JSON input
// 4. Build up string as traversing and then return it


// 1. Be able to detect what data type each node is

var classifyType = function(input) {
  // detect if input is primitive or object
  // if input is primitive, return type
  // if input is object, detect the object and return type
};

var classifyObject = function(input) {
  // detect which type of object
  // return object type
};

// ORIGINAL FUNCTION

var stringifyJSON = function(obj) {
  // determine what type of item it is
  // will process
    // number
    // string
    // boolean
    // null (use obj === null)
    // use Array.isArray or Object.prototype.toString.call
      // array
      // object
  // will not process
    // function
    // undefined
};
