module.exports = function towelSort (matrix = []) {
    let resArr = [];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            // if raw is even sorting forward
            matrix[i].sort((a, b) => a - b);
        } else {
            // if raw is odd sorting backward
            matrix[i].sort((a, b) => b - a);
        }
        // adding raw to resulting matrix
        resArr.concat(matrix[i]);
    }

    return resArr;
}
