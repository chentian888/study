import {render} from "./render";

let startTimer = Date.now();

function handleTicker(timestamp) {
    // render(box, map)
    // if (startTimer === undefined) startTimer = timestamp
    // const elapsed = timestamp - startTimer
    // console.log(timestamp)
    tickers.forEach((ticker) => {
        ticker(Date.now() - startTimer)
        // ticker(elapsed)
    })
    startTimer = Date.now()
    requestAnimationFrame(handleTicker)
}

requestAnimationFrame(handleTicker)

const tickers = []

export function addTicker(ticker) {
    tickers.push(ticker)
}