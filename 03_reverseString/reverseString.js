const reverseString = function (word) {
  let reversed = "";
  for (let i = 1; i <= word.length + 1; i++) {
    reversed = reversed + word.charAt(word.length - i);
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
