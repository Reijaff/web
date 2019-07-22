function calc_row_col(matrix_2d) {
    let matrix_len = matrix_2d.length;
    let sum_row = 0;
    for (let x of matrix_2d[0]) sum_row += x;
    let weak = 0;
    let count = 0;

    for (let y = 0; y < matrix_len; y++) {
        for (let t = 0; t < matrix_len; t++) {
            count += matrix_2d[y][t];
        }
        if (sum_row > count) {
            sum_row = count;
            weak = y;
        }
        count = 0;
    }
    return weak;
}

function inverse(matrix_2d) {
    let matrix_2d_len = matrix_2d.length;
    let new_matrix_2d = new Array(matrix_2d_len);
    for (let i = 0; i < matrix_2d_len; i++) {
        new_matrix_2d[i] = new Array(matrix_2d_len);
    }
    for (let y = 0; y < matrix_2d_len; y++) {
        for (let t = 0; t < matrix_2d_len; t++) {
            new_matrix_2d[t][y] = matrix_2d[y][t];
        }
    }
    return new_matrix_2d;
}

function weakPoint(matrix) {
    let matrix_len = matrix.length;
    let weak_row = calc_row_col(matrix);
    let weak_col = calc_row_col(inverse(matrix));

    return [weak_row, weak_col];
}

console.log(weakPoint([[1, 1, 1], [1, 1, 1], [1, 1, 1]]));
