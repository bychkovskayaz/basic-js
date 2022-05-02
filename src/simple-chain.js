const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
//  throw new NotImplementedError('Not implemented');
// remove line with error and write your code here
const chainMaker = {
  mas: [],
  getLength() {
    let length = this.mas.length;
    this.mas = [];
    return t;
  },
  addLink(value) {
    this.mas.push(String(value));
    return this;   
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.mas.length) {
      this.mas = [];
      throw new NotImplementedError(`You can't remove incorrect link`);
    }
    this.mas.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.mas = this.mas.reverse();
    return this;
  },
  finishChain() {
    let string = this.mas.join(' )~~( ');
    this.mas = [];
    string = '( '.concat(string);
    string = string.concat(' )');
    return string;
  }
};


module.exports = {
  chainMaker
};
