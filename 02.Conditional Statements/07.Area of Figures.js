function areaOfFigures (input) {
    let figure = input[0]

    if (figure === 'square') {
        let length_size = Number(input[1])
        let result = length_size * length_size
        console.log(result.toFixed(3))
    }

    else if (figure === 'rectangle') {
        let a = Number(input[1])
        let b = parseFloat(input[2])
        let result = a * b
        console.log(result.toFixed(3))
    }

    else if (figure === 'circle') {
        let radius = Number(input[1])
        let result = Math.PI * radius**2
        console.log(result.toFixed(3))
    }

    else  {
        let base = parseFloat(input[1])
        let height = Number(input[2])
        let result = 1 / 2 * base * height
        console.log(result.toFixed(3))
    }
}
