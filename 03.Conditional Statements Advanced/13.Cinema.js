function cinema(input) {
    let projection = input[0]
    let rows = Number(input[1])
    let cols = Number(input[2])

    let totalPlaces = rows * cols
    let revenue = 0

    if (projection === 'Premiere') {
        revenue = totalPlaces * 12
    } else if (projection === 'Normal') {
        revenue = totalPlaces * 7.5
    } else {
        revenue = totalPlaces * 5

    } console.log(`${revenue.toFixed(2)} leva`)

}
