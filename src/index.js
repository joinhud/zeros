module.exports = function getZerosCount(number) {
  var result = 0;

  while (number > 0) {
    number = Math.floor(number / 5);
    result += number;
  }

  return result;
}
