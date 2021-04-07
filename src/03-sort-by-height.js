/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const minusOneIndexes = [];
  arr.map((item, index) => {
    if (item === -1) {
      minusOneIndexes.push(index);
    }
    return item;
  });
  const cleanArray = arr.filter((item) => item !== -1).sort((a, b) => a - b);
  if (cleanArray.length === 0) {
    return arr;
  }
  for (let i = 0; i < minusOneIndexes.length; i++) {
    cleanArray.splice(minusOneIndexes[i], 0, -1);
  }

  // console.log(cleanArray);
  return cleanArray;
}
// let arr = [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3];
// console.log(sortByHeight(arr));
module.exports = sortByHeight;
