function countNeighbours(data, row, col) {
    let count = 0;
    let copy_row_minus, copy_col_minus, copy_col_plus, copy_row_plus;

    copy_row_minus = row - 1 < 0 ? 0 : row - 1;
    copy_row_plus = row + 1 > data.length - 1 ? data.length - 1 : row + 1;
    copy_col_minus = col - 1 < 0 ? 0 : col - 1;
    copy_col_plus = col + 1 > data.length - 1 ? data.length - 1 : col + 1;

    for (let i = copy_row_minus; i <= copy_row_plus; i++) {
        for (let j = copy_col_minus; j <= copy_col_plus; j++) {
            if (!(i == row && j == col) && data[i][j] == 1) {
                count++;
            }
        }
    }
    console.log(data.length);
    return count;
}

console.log(
    countNeighbours(
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        5,
        5,
    ),
);
