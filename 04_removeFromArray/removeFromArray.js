const removeFromArray = function (array) {
  if (arguments.length === 1) {
    return array;
  }
  let arr = array;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arguments.length; j++) {
      if (arr[i] === arguments[j]) {
        arr[i] = null;
      }
    }
  }
  let filtered = arr.filter(function (x) {
    return x != null;
  });
  return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
