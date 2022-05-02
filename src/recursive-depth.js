const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.countArrays= 1;
    this.CountArraysElement = 1;
  }
  calculateDepth(arr) {
    arr.forEach(element => {
      if (Array.isArray(element)) {
        this.CountArraysElement++;
        this.calculateDepth(element);
      }
    });
    if (this.CountArraysElement > this.countArrays) {
      this.countArrays = this.CountArraysElement;
    }
    this.CountArraysElement = 1;
    return this.countArrays;
  }
}

// let t = new DepthCalculator();
// console.log(t.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]));


module.exports = {
  DepthCalculator
};
