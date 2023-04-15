function fruitShop(input) {
    let product = input[0]
    let day = input[1]
    let quantity = Number(input[2])
    let price = 0

    if (day === 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday') {
        if (product === 'banana' || product === 'apple' || product === 'orange' || product === 'grapefruit' || product === 'kiwi' || product === 'pineapple' || product === 'grapes') {
            switch (product) {
                case 'banana': price = 2.5 * quantity; break;
                case 'apple': price = 1.2 * quantity; break;
                case 'orange': price = 0.85 * quantity; break;
                case 'grapefruit': price = 1.45 * quantity; break;
                case 'kiwi': price = 2.7 * quantity; break;
                case 'pineapple': price = 5.5 * quantity; break;
                case 'grapes': price = 3.85 * quantity; break;

            }console.log(price.toFixed(2))

            {

            }
        } else {
            console.log('error')
        }
    } else if (day === 'Saturday' || day === 'Sunday') {
        if (product === 'banana' || product === 'apple' || product === 'orange' || product === 'grapefruit' || product === 'kiwi' || product === 'pineapple' || product === 'grapes') {
            switch (product) {
                case 'banana': price = 2.7 * quantity; break;
                case 'apple': price = 1.25 * quantity; break;
                case 'orange': price = 0.9 * quantity; break;
                case 'grapefruit': price = 1.6 * quantity; break;
                case 'kiwi': price = 3 * quantity; break;
                case 'pineapple': price = 5.6 * quantity; break;
                case 'grapes': price = 4.2 * quantity; break;
            }
        }console.log(price.toFixed(2))
    }else {
        console.log('error')
    }
}
