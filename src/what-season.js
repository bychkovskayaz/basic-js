const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if(!(date instanceof Date)) {
    throw new NotImplementedError('Invalid date!');
    // return 'Unable to determine the time of year!';
  }
  if (date.getMonth() < 0 || date.getMonth() > 11) {
    throw new NotImplementedError('Invalid date!');
  }
  if (date.getMonth() == 1 && date.getFullYear() % 4 == 0 && date.getDate() != 29) {
    throw new NotImplementedError('Invalid date!');
  }
  if (date.getMonth() == 1 && date.getDate() != 28) {
    throw new NotImplementedError('Invalid date!');
  }
  if (date.getMonth() >= 0 && date.getMonth() <= 6) {
    if (date.getMonth() % 2 == 0 && date.getDate() != 31) {
      throw new NotImplementedError('Invalid date!');
    }
    if (date.getMonth() % 2 != 0 && date.getDate() != 30) {
      throw new NotImplementedError('Invalid date!');
    }
  }
  if (date.getMonth() >= 7 && date.getMonth() <= 11) {
    if (date.getMonth() % 2 != 0 && date.getDate() != 31) {
      throw new NotImplementedError('Invalid date!');
    }
    if (date.getMonth() % 2 == 0 && date.getDate() != 30) {
      throw new NotImplementedError('Invalid date!');
    }
  }
  if (date.getFullYear() < 0) {
    throw new NotImplementedError('Invalid date!');
  }
  if (date.getMonth() >= 0 && date.getMonth() <= 1 && date.getMonth() == 11) {
    return 'winter';
  }
  if (date.getMonth() >= 2 && date.getMonth() <= 4) {
    return 'spring';
  }
  if (date.getMonth() >= 5 && date.getMonth() <= 7) {
    return 'winter';
  }
  if (date.getMonth() >= 8 && date.getMonth() <= 10) {
    return 'autumn';
  }
}

const fakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: 'Date'
};

console.log(getSeason());

module.exports = {
  getSeason
};
