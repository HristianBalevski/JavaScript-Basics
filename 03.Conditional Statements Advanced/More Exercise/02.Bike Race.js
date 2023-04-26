function bikeRace(input) {
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let race = input[2];

    let totalPeople = juniors + seniors
    let totalMoney = 0
    let expenses = 0.05

    if (race == 'trail') {
        totalMoney = (juniors * 5.50) + (seniors * 7)
    } else if (race == 'cross-country') {
        totalMoney = (juniors * 8) + (seniors * 9.50)
        if (totalPeople >= 50) {
            totalMoney *= 0.75
        }
    } else if (race == 'downhill') {
        totalMoney = (juniors * 12.25) + (seniors * 13.75)
    } else {
        totalMoney = (juniors * 20) + (seniors * 21.50)
    }
    totalMoney -= totalMoney * expenses
    console.log(totalMoney.toFixed(2))
}
bikeRace(['21', '26', 'cross-country'])
