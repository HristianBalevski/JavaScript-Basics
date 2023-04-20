function skiTrip(input) {
    let days = Number(input[0])
    let hall = input[1]
    let grade = input[2]

    let roomPrice = 18
    let apartmentPrice = 25
    let presidentPrice = 35

    let nights = days - 1
    let totalPrice = 0

    if (hall === 'room for one person') {
        totalPrice = nights * roomPrice
    } else if (hall === 'apartment') {
        if (days < 10) {
            totalPrice = (nights * apartmentPrice) * 0.7
        } else if (days >= 10 && days <= 15) {
            totalPrice = (nights * apartmentPrice) * 0.65
        } else {
            totalPrice = (nights * apartmentPrice) * 0.5
        }
    } else {
        if (days < 10) {
            totalPrice = (nights * presidentPrice) * 0.9
        } else if (days >= 10 && days <= 15) {
            totalPrice = (nights * presidentPrice) * 0.85
        } else {
            totalPrice = (nights * presidentPrice) * 0.8
        }
    } if (grade === 'positive') {
        totalPrice += totalPrice * 0.25
    } else {
        totalPrice -= totalPrice * 0.1
    }
    console.log(totalPrice.toFixed(2))
}
