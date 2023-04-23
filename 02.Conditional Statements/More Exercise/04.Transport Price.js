function transportPrice(input) {
    let kilometers = Number(input[0]);
    let dayOrNight = input[1]

    if (kilometers >= 20 && kilometers < 100) {
        price = kilometers * 0.09
        console.log(price.toFixed(2))
    } else if (kilometers > 100) {
        price = kilometers * 0.06
        console.log(price.toFixed(2))
    } else {
        if (dayOrNight === 'day') {
            price = (kilometers * 0.79) + 0.70
            console.log(price.toFixed(2))
        } else {
            price = (kilometers * 0.90) + 0.70
            console.log(price.toFixed(2))
        }
    }
}

transportPrice(['7', 'night'])