const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    // throw new CustomError('Not implemented');
    let ln = 0.693;
    if (typeof sampleActivity === "string") {
        if (+sampleActivity%1 === 0 && +sampleActivity>0 && +sampleActivity<MODERN_ACTIVITY ) {
            return Math.ceil(MODERN_ACTIVITY / +sampleActivity) / (ln / HALF_LIFE_PERIOD)
        } else {
            return false
        }
    } else {
        return false
    }
};
