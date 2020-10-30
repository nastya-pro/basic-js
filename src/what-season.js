module.exports = function getSeason(date) {
    if (date === undefined) {
        return 'Unable to determine the time of year!'
    } else if (date.getDate !== Date.prototype.getDate) {
        throw Error
    }
    if (date.getMonth() >= 2 && date.getMonth() <= 4) {
        return "spring"
    } else if (date.getMonth() >= 5 && date.getMonth() <= 7) {
        return "summer"
    } else if (date.getMonth() >= 8 && date.getMonth() <= 10) {
        return "autumn"
    } else {
        return "winter"
    }
};
