/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */



function sumSalary(salaries) {
  let one = 0;
  
  for (let key in salaries) {
    if (typeof (salaries[key]) == 'number') {
      one += salaries[key];
    } else if (!key) {
      return one ;
    }
  }
  return one;
}
