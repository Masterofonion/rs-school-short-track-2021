/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  let adress;
  for (let i = 0; i < domains.length; i++) {
    adress = domains[i].split('.').reverse();
    adress.reduce((accum, item) => {
      accum += `.${item}`;// eslint-disable-line no-param-reassign
      if (res[accum] > 0) {
        res[accum]++;
      } else {
        res[accum] = 1;
      }
      return accum;
    }, '');
  }
  return res;
}

module.exports = getDNSStats;
