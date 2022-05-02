const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) { 
  if (!Array.isArray(arr)) {
  throw new NotImplementedError(`'arr' parameter must be an instance of the Array!`);
  }
  let arr2 = [];
  arr2 = arr.slice();
  while (arr2.includes('--discard-next') || arr2.includes('--discard-prev') || arr2.includes('--double-next') ||arr2.includes('--double-prev')) {
    if (arr2.includes('--discard-next')) {
      if (arr2.indexOf('--double-prev') == arr2.indexOf('--discard-next') + 2) {
        arr2.splice(arr2.indexOf('--discard-next'), 3);
      }
      else if (arr2.indexOf('--discard-prev') == arr2.indexOf('--discard-next') + 2) {
        arr2.splice(arr2.indexOf('--discard-next'), 3);
      }
      else if (arr2.indexOf('--discard-next') != arr2.length - 1) {
        arr2.splice(arr2.indexOf('--discard-next'), 2);
      }
      else {
        arr2.splice(arr2.indexOf('--discard-next'), 1);
      }
    }
    if (arr2.includes('--double-next')) {
      if (arr2.indexOf('--double-next') != arr2.length - 1) {
        arr2[arr2.indexOf('--double-next')] = arr2[arr2.indexOf('--double-next') + 1];
      }
      else {
        arr2.splice(arr2.indexOf('--double-next'), 1);
      }
    }
    if (arr2.includes('--discard-prev')) {
      // if (arr2.indexOf('--discard-prev') == arr2.indexOf('--double-next') - 2) {
      //   arr2.splice(arr2.indexOf('--double-next'), 3);
      // }
      if (arr2.indexOf('--discard-prev') != 0) {
        arr2.splice(arr2.indexOf('--discard-prev') - 1, 2);
      }
      else {
        arr2.splice(arr2.indexOf('--discard-prev'), 1);
      }
    }
    if (arr2.includes('--double-prev')) {
      if (arr2.indexOf('--double-prev') != 0) {
        arr2[arr2.indexOf('--double-prev')] = arr2[arr2.indexOf('--double-prev') - 1];
      }
      else {
        arr2.splice(arr2.indexOf('--double-prev'), 1);
      }
    }
  }
  return arr2;
}

console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]));

module.exports = {
  transform
};
