function smallShop(input) {
    let product = input[0]
    let city = input[1]
    let quantity = Number(input[2])
    let totalPrice = 0

    if (city === 'Sofia') {
        switch (product) {
            case 'coffee': totalPrice = quantity * 0.5; break;
            case 'water': totalPrice = quantity * 0.8; break;
            case 'beer': totalPrice = quantity * 1.2; break;
            case 'sweets': totalPrice = quantity * 1.45; break;
            case 'peanuts': totalPrice = quantity * 1.6; break;
        }console.log(totalPrice)

    } else if (city === 'Varna') {
        switch (product) {
            case 'coffee': totalPrice = quantity * 0.45; break;
            case 'water': totalPrice = quantity * 0.7; break;
            case 'beer': totalPrice = quantity * 1.10; break;
            case 'sweets': totalPrice = quantity * 1.35; break;
            case 'peanuts': totalPrice = quantity * 1.55; break;
            
        }console.log(totalPrice)

    } else if (city === 'Plovdiv') {
        switch (product) {
            case 'coffee': totalPrice = quantity * 0.4; break;
            case 'water': totalPrice = quantity * 0.7; break;
            case 'beer': totalPrice = quantity * 1.15; break;
            case 'sweets': totalPrice = quantity * 1.30; break;
            case 'peanuts': totalPrice = quantity * 1.5; break;
            
        }console.log(totalPrice)
    }
}
