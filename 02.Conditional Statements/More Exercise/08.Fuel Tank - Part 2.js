function fuelTankPart2(input) {
    let typeOfFuel = input[0];
    let fuelQuantity = Number(input[1]);
    let discountCard = input[2];

    let gasolinePrice = 2.22;
    let diselPrice = 2.33;
    let gasPrice = 0.93;

    let refuling = 0

    if (typeOfFuel == 'Gasoline') {
        refuling = gasolinePrice * fuelQuantity
        if (discountCard == 'Yes') {
            refuling -= fuelQuantity * 0.18
        }
    } else if (typeOfFuel == 'Diesel') {
        refuling = diselPrice * fuelQuantity
        if (discountCard == 'Yes') {
            refuling -= fuelQuantity * 0.12
        }
    } else {
        refuling = gasPrice * fuelQuantity
        if (discountCard == 'Yes') {
            refuling -= fuelQuantity * 0.08
        }
    }
    if (fuelQuantity >= 20 && fuelQuantity <= 25) {
        refuling *= 0.92
    } else if (fuelQuantity > 25) {
        refuling *= 0.90
    } console.log(`${refuling.toFixed(2)} lv.`)

}
fuelTankPart2(['Diesel', '19', 'No'])
