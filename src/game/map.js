export function initMap(row, col, map) {
    for (let i = 0; i < row; i++) {
        map[i] = []
        for (let j = 0; j < col; j++) {
            map[i][j] = 0
        }
    }
}