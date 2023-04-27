function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = ''
    let location = ''
    let price = 0

    if (budget <= 1000) {
        location = 'Camp'
        if (season == 'Summer') {
            destination = 'Alaska'
            price = budget * 0.65
        } else {
            destination = 'Morocco'
            price = budget * 0.45
        }
    } else if (budget > 1000 && budget <= 3000) {
        location = 'Hut'
        if (season == 'Summer') {
            destination = 'Alaska'
            price = budget * 0.80
        } else {
            destination = 'Morocco'
            price = budget * 0.60
        }
    } else {
        location = 'Hotel'
        if (season == 'Summer') {
            destination = 'Alaska'
            price = budget * 0.90
        } else {
            destination = 'Morocco'
            price = budget * 0.90
        }
    } console.log(`${destination} - ${location} - ${price.toFixed(2)}`)
}
vacation(['800', 'Summer'])
vacation(['799.50', 'Winter'])