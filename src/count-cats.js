const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    // throw new CustomError('Not implemented');
    let num = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (String(matrix[i][j]) === "^^") {
                num = num +1;
            }
        }
    }
    return num;
};
