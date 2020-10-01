module.exports = function towelSort (matrix) {
    let resArr = [];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            matrix[i].sort(a, b => a - b);
        } else {
            matrix[i].sort(a, b => b - a);
        }
        resArr.concat(matrix[i]);
    }

    return resArr;
}
