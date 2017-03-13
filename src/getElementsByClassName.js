// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// Needs to find all DOM elements in the document that have the
// "targetClassName" as a class.
// Return each DOM element into a result array
// DOM element type is object

// "You should use document.body, element.childNodes, and element.classList"

var getElementsByClassName = function(className) {
  // get the document.body as the starting point
  // iterate starting with the body and element.childNodes
  // use recursion to iterated on each element if it has childNodes
  // for each element, see if "targetClassName" is in the element.classList
  // if so, push the element to a solution array
  // after all iterating is done, return the solution array

  // considerations
  // 1. make sure to check body first before children
  // 2. make sure to get siblings
  // 3. make sure to get children
  // 4. make sure to get elements with more than 1 class
  
};
