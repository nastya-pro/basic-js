module.exports = function transform(arr) {
    let array = arr.slice();
    if (typeof arr !== typeof array) {
        throw Error
    }
    for (let i = 0; i < arr.length; i++) {
        if (array[i] === "--discard-next") {
            array[i] = null;
            if (i !== arr.length - 1) {
                array[i + 1] = null
            }
        } else if (array[i] === "--discard-prev") {
            array[i] = null;
            if (i !== 0) {
                array[i - 1] = null
            }
        } else if (array[i] === "--double-next") {
            if (i !== arr.length - 1) {
                array[i] = array[i + 1];
            } else {
                array[i] = null;
            }
        } else if (array[i] === "--double-prev") {
            if (i !== 0) {
                array[i] = array[i - 1];
            } else {
                array[i] = null;
            }
        }
    }
    return array.filter(el => el !== null);
};

