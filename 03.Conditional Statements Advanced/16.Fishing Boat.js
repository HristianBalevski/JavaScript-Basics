function fishingBoat(input) {
    let budget = Number(input[0])
    let season = input[1]
    let quantity = Number(input[2])

    let boatPrice = 0

    if (season === 'Spring') {
        boatPrice = 3000
    } else if (season === 'Summer' || season === 'Autumn') {
        boatPrice = 4200
    } else {
        boatPrice = 2600
    }

    if (quantity <= 6) {
        boatPrice *= 0.9
    } else if (quantity <= 11) {
        boatPrice *= 0.85
    } else {
        boatPrice *= 0.75
    }

    if (quantity % 2 === 0 && season != 'Autumn') {
        boatPrice *= 0.95
    }

    let finalMoney = Math.abs(budget - boatPrice)

    if (budget >= boatPrice) {
        console.log(`Yes! You have ${finalMoney.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${finalMoney.toFixed(2)} leva.`)
    }
}
