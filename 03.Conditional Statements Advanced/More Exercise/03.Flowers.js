function flowerShop(input) {
    let chrysanthemums = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let typeOfTheDay = input[4];

    let holiday = 0.15
    let totalPrice = 0
    let service = 2
    let totalFlowers = chrysanthemums + roses + tulips

    if (season == 'Spring' || season == 'Summer') {
        totalPrice = ((chrysanthemums * 2) + (roses * 4.10) + (tulips * 2.50))
    } else {
        totalPrice = ((chrysanthemums * 3.75) + (roses * 4.50) + (tulips * 4.15))
    }
    if (typeOfTheDay == 'Y') {
        totalPrice += totalPrice * holiday
    }
    if (season == 'Spring' && tulips > 7) {
        totalPrice *= 0.95
    } else if (season == 'Winter' && roses >= 10) {
        totalPrice *= 0.90
    }
    if (totalFlowers > 20) {
        totalPrice *= 0.80
    }
    let finalPrice = totalPrice + service
    console.log(finalPrice.toFixed(2))

}
flowerShop(['2', '4', '8', 'Spring', 'Y'])
flowerShop(['3', '10', '9', 'Winter', 'N'])