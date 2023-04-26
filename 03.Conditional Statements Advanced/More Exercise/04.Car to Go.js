function rentACar(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let typeClass = ''
    let typeCar = ''
    let price = 0

    if (budget <= 100) {
        typeClass = 'Economy class'
        if (season == 'Summer') {
            typeCar = 'Cabrio'
            price = budget * 0.35
        } else {
            typeCar = 'Jeep'
            price = budget * 0.65
        }
    } else if (budget > 100 && budget <= 500) {
        typeClass = 'Compact class'
        if (season == 'Summer') {
            typeCar = 'Cabrio'
            price = budget * 0.45
        } else {
            typeCar = 'Jeep'
            price = budget * 0.80
        }
    } else {
        typeClass = 'Luxury class'
        typeCar = 'Jeep'
        price = budget * 0.90
    }
    console.log(typeClass)
    console.log(`${typeCar} - ${price.toFixed(2)}`)
}
rentACar(['450', 'Summer'])
rentACar(['450', 'Winter'])
rentACar(['1010', 'Summer'])