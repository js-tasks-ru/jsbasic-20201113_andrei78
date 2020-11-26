/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
   one = str.toLowerCase();
    if(one.indexOf('1xbet') != -1 || one.indexOf('xxxxx') != -1 ) {
        return true
    }

    return false
}
