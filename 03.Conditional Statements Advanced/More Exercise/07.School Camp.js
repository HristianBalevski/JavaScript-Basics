function schoolCamp(input) {
    let season = input[0];
    let group = input[1];
    let people = Number(input[2]);
    let nights = Number(input[3]);

    let sport = ''
    let priceForNight = 0
    let price = 0

    if (group == 'mixed') {
        if (season == 'Winter') {
            priceForNight = 10
        } else if (season == 'Spring') {
            priceForNight = 9.50
        } else {
            priceForNight = 20
        }
    } else {
        if (season == 'Winter') {
            priceForNight = 9.60
        } else if (season == 'Spring') {
            priceForNight = 7.20
        } else {
            priceForNight = 15
        }
    }

    price = priceForNight * nights

    if (people >= 50) {
        price *= 0.50
    } else if (people >= 20) {
        price *= 0.85
    } else if (people >= 10) {
        price *= 0.95
    }

    if (group == 'boys') {
        if (season == 'Winter') {
            sport = 'Judo'
        } else if (season == 'Spring') {
            sport = 'Tennis'
        } else {
            sport = 'Football'
        }
    } else if (group == 'girls') {
        if (season == 'Winter') {
            sport = 'Gymnastics'
        } else if (season == 'Spring') {
            sport = 'Athletics'
        } else {
            sport = 'Volleyball'
        }
    } else {
        if (season == 'Winter') {
            sport = 'Ski'
        } else if (season == 'Spring') {
            sport = 'Cycling'
        } else {
            sport = 'Swimming'
        }
    }
    price *= people
    console.log(`${sport} ${price.toFixed(2)} lv.`)

}
schoolCamp(['Spring', 'girls', '20', '7'])
schoolCamp(['Winter', 'mixed', '9', '15'])
schoolCamp(['Summer', 'boys', '60', '7'])
schoolCamp(['Spring', 'mixed', '17', '14'])