// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// "You should use document.body, element.childNodes, and element.classList"

var arrayify = function(listObj) {
  return Array.prototype.slice.apply(listObj);
};

var searchNodes = function(listObj, className) {
  var results = [];
  listObj.forEach(function(node) {
    if (node.classList && arrayify(node.classList).includes(className)) {
      results.push(node);
    }
    if (node.childNodes.length > 0) {
      results = results.concat(searchNodes(node.childNodes, className));
    }
  });
  return results;
};

var getElementsByClassName = function(className) {
  return searchNodes(document.childNodes, className);
};
