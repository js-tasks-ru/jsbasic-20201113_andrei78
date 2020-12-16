/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  return arr.filter(item => {
    if ( b < item < a) {
      return item;
    }
  });
}
