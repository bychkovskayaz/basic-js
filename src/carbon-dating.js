const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  if (~sampleActivity.indexOf('.')) {
    sampleActivity = parseFloat(sampleActivity, 10);
  } else {
    sampleActivity = parseInt(sampleActivity, 10);
  }
  if (!sampleActivity || sampleActivity<=0 || sampleActivity >= MODERN_ACTIVITY) return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.ceil(-Math.log(sampleActivity/MODERN_ACTIVITY) / k);
  return t;
}

module.exports = {
  dateSample
};
