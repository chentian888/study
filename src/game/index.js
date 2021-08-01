export * from './config'
import {gameRow, gameCol} from './config'
import {initMap} from './map'
import {render} from './render'
import {addTicker} from './ticker'


function intervalTimer() {
    let t = 0
    return (n, interval) => {
        t += n
        if (t >= interval) {
            t = 0
            return true
        }
        return false
    }
}

export function startGame(map) {
    initMap(gameRow, gameCol, map)
    const box = {
        x: 0,
        y: 0,
        shape: [
            [1, 1],
            [1, 1]
        ]
    }

    const isDownMove = intervalTimer()

    function handleTicker(n) {
        // console.log(n)
        if (isDownMove(n, 1000)) {
            box.y++
        }
        render(box, map)
    }


    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            box.y++
        }
    })
    addTicker(handleTicker)
}
