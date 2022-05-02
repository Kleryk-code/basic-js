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
function transform( arr ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let directive = arr.find(el => typeof el == 'string');
  // let indexDirective = arr.findIndex(el => typeof el == 'string');
  // switch (directive) {
  //   case '--discard-next':
  //       alert('--discard-next');
  //       let result = arr.slice(indexDirective, (indexDirective + 1))
  //       break;
  //   case '--discard-prev':
  //       alert('--discard-prev');
  //       break;
  //   case '--double-next':
  //       alert(indexDirective);
  //       break;
  //   case '--double-next':
  //       alert('--double-prev');
  //       break;
  // }
  // return result;
}

module.exports = {
  transform
};
