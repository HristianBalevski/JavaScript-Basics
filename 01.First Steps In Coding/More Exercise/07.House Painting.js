function housePainting(input) {
    let height = Number(input[0]);
    let length = Number(input[1]);
    let h = Number(input[2]);

    let doorSize = 1.2 * 2
    let windowSize = 1.5 * 1.5

    let neededGreenPaint = ((((height * height) * 2) - doorSize) + ((height * length) * 2) - (windowSize * 2)) / 3.4
    let neededRedPaint = ((((height * length) * 2 + ((height * h) / 2) * 2)) / 4.3)

    console.log(neededGreenPaint.toFixed(2))
    console.log(neededRedPaint.toFixed(2))
}
