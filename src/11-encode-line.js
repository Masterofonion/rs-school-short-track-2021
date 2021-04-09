/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const res = [];
  const array = str.split('');
  array.reduce((accum, letter, index) => {
    if (accum.includes(letter) || accum.length === 0) {
      accum.push(letter);
      if (index === (array.length - 1)) {
        if (accum.length > 1) {
          res.push(`${accum.length}${accum[0]}`);
        } else {
          res.push(`${accum[0]}`);
        }
      }
    } else {
      if (accum.length > 1) {
        res.push(`${accum.length}${accum[0]}`);
      } else {
        res.push(`${accum[0]}`);
      }
      accum = [];// eslint-disable-line no-param-reassign
      accum.push(letter);
      if (index === (array.length - 1)) {
        res.push(`${accum[0]}`);
      }
    }
    return accum;
  }, []);
  return res.join('');
}
module.exports = encodeLine;
