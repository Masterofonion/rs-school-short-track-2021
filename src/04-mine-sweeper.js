/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const width = matrix[0].length;
  let array = matrix.reduce((preItem, item) => preItem.concat(item), []);
  const minesPlace = [];
  const minesQuantity = array.filter((item, index) => {
    if (item === true) {
      minesPlace.push(index);
      return true;
    }
    return false;
  }).length;
  array = array.map((item) => {
    if (item === false) {
      return 0;
    }
    return item;
  });
  for (let i = 0; i < minesQuantity; i++) {
    if ((minesPlace[i] - width - 1) >= 0 && minesPlace[i] % width !== 0
    && array[minesPlace[i] - width - 1] !== true) {
      array[minesPlace[i] - width - 1] += 1;
    }
    if ((minesPlace[i] - width) >= 0 && array[minesPlace[i] - width] !== true) {
      array[minesPlace[i] - width] += 1;
    }
    if ((minesPlace[i] - width + 1) > 0 && (minesPlace[i] + 1) % width !== 0
    && array[minesPlace[i] - width + 1] !== true) {
      array[minesPlace[i] - width + 1] += 1;
    }
    if ((minesPlace[i] - 1) >= 0 && minesPlace[i] % width !== 0
    && array[minesPlace[i] - 1] !== true) {
      array[minesPlace[i] - 1] += 1;
    }
    if ((minesPlace[i] + 1) >= 0 && (minesPlace[i] + 1) % width !== 0
    && array[minesPlace[i] + 1] !== true) {
      array[minesPlace[i] + 1] += 1;
    }
    if ((minesPlace[i] + width - 1) < array.length && minesPlace[i] % width !== 0
    && array[minesPlace[i] + width - 1] !== true) {
      array[minesPlace[i] + width - 1] += 1;
    }
    if ((minesPlace[i] + width) < array.length && array[minesPlace[i] + width] !== true) {
      array[minesPlace[i] + width] += 1;
    }
    if ((minesPlace[i] + width + 1) < array.length
    && (minesPlace[i] + 1) % width !== 0 && array[minesPlace[i] + width + 1] !== true) {
      array[minesPlace[i] + width + 1] += 1;
    }
  }
  array = array.map((item) => {
    if (item === true) {
      return 1;
    }
    return item;
  });
  const result = [];
  array.reduce((preItem, item) => {
    preItem.push(item);
    if (preItem.length > width - 1) {
      result.push(preItem);
      preItem = []; // eslint-disable-line no-param-reassign
    }
    return preItem;
  }, []);
  return result;
}
module.exports = minesweeper;
