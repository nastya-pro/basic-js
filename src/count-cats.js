module.exports = function countCats(matrix) {
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
