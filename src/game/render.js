import {gameRow, gameCol} from './config'

export function render(box, map) {
    console.log('render')
    reset(map)
    _render(box, map)
}

function _render(box, map) {
    const rowShape = box.shape.length
    const colShape = box.shape[0].length
    for (let i = 0; i < rowShape; i++) {
        for (let j = 0; j < colShape; j++) {
            const x = box.x + j
            const y = box.y + i
            map[y][x] = 1
        }
    }
}

function reset(map) {
    for (let i = 0; i < gameRow; i++) {
        for (let j = 0; j < gameCol; j++) {
            if (map[i][j] > 0) {
                map[i][j] = 0
            }
        }
    }
}