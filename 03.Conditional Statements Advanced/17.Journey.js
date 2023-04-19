function trip(input) {
    let budget = Number(input[0])
    let season = input[1]

    let destination = ''
    let sleep = ''

    if (budget <= 100) {
        destination = 'Bulgaria'
        if (season === 'summer') {
            budget *= 0.30
            sleep = 'Camp'
        } else {
            budget *= 0.70
            sleep = 'Hotel'
        }
    } else if (budget <= 1000) {
        destination = 'Balkans'
        if (season === 'summer') {
            budget *= 0.40
            sleep = 'Camp'
        } else {
            budget *= 0.80
            sleep = 'Hotel'
        }
    } else {
        destination = 'Europe'
        budget *= 0.9
        sleep = 'Hotel'
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${sleep} - ${budget.toFixed(2)}`)
}
