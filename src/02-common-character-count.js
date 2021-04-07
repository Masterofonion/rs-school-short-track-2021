/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let short;
  let long;
  if (!s1 || !s2) {
    return 0;
  }
  if (s1.length >= s2.length) {
    long = s1.split('');
    short = s2.split('');
  } else {
    long = s2.split('');
    short = s1.split('');
  }

  for (let i = 0; i < short.length; i++) {
    if (long.includes(short[i])) {
      count++;
      long.splice(long.indexOf(short[i]), 1);
    }
  }
  return count;
}
module.exports = getCommonCharacterCount;
