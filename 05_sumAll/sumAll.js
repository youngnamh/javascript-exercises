const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  } else if (a < 0 || b < 0) {
    return "ERROR";
  }

  if (b === a) {
    return a;
  } else if (a > b) {
    temp = a;
    a = b;
    b = temp;
  }
  let sum = 0;

  for (let i = 0; i <= b - a; i++) {
    sum = sum + a + i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
