/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (str != '') {
    let one = str[0].toUpperCase();
    let two = str.slice(1);
    return one + two;
  } else {
    return str;
  }

}
