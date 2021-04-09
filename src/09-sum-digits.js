/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let number = n;
  let res = 0;
  while (String(number).length > 1) {
    res = String(number).split('').reduce((accum, item) => {
      accum += Number(item);// eslint-disable-line no-param-reassign
      return accum;
    }, 0);
    number = res;
  }
  return res;
}
module.exports = getSumOfDigits;
