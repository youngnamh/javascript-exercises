const convertToCelsius = function (fahr) {
  let cels = (fahr - 32) * (5 / 9);
  cels = Math.round(cels * 10) / 10;
  return cels;
};

const convertToFahrenheit = function (cels) {
  let fahr = cels * (9 / 5) + 32;
  fahr = Math.round(fahr * 10) / 10;
  return fahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
