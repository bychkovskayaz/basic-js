const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if(typeof str !== 'string') {
    str = String(str);
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.separator) {
    options.separator = '+';
  }
  if (options.addition && !options.additionSeparator) {
    options.additionSeparator = '|';
  }
  if (options.addition && !options.additionRepeatTimes) {
    options.additionRepeatTimes = 0;
  }
  if (options.addition === undefined) {
    options.addition = '';
  }
  if (typeof options.addition !== 'string') {
    options.addition = String(options.addition);
  }
  let strForRepeat = '';
  strForRepeat = str.slice();
  for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
    strForRepeat += options.addition;
    strForRepeat += options.additionSeparator;
  }
  strForRepeat += options.addition;
  let strEnd = '';
  strEnd = strForRepeat.slice();
  strForRepeat = options.separator.concat(strForRepeat);
  for (let i = 1; i < options.repeatTimes; i++) {
    strEnd += strForRepeat;
  }
  return strEnd;
} 
repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' });

module.exports = {
  repeater
};
