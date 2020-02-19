const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivityStr) {
  if (!sampleActivityStr || typeof sampleActivityStr !== "string") {
    return false;
  }
  const sampleActivity = parseFloat(sampleActivityStr);
  if (!sampleActivity) {
    return false;
  }
  if (sampleActivity <= 0 || sampleActivity > 15) {
    return false;
  }

  return Math.ceil(-Math.log(sampleActivity / MODERN_ACTIVITY) * HALF_LIFE_PERIOD / 0.693);
}


// assert.equal(dateSample('11.3231.3213124'), 2326);
console.log(dateSample("11.3231.3213124"));
module.exports = dateSample;
