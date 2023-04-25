function fuelTank(input) {
    let fuelType = input[0];
    let fuelLitters = Number(input[1]);

    let typesOfFuels = ['Diesel', 'Gasoline', 'Gas']

    if (typesOfFuels.includes(fuelType)) {
        if (fuelLitters >= 25) {
            console.log(`You have enough ${fuelType.toLowerCase()}.`)
        } else {
            console.log(`Fill your tank with ${fuelType.toLowerCase()}!`)
        }
    } else {
        console.log('Invalid fuel!')
    }


}
fuelTank(['Kerosene', '40'])
