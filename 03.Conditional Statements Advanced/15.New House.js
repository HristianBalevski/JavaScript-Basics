function newHouse(input) {
    let flower = input[0]
    let quantity = Number(input[1])
    let budget = Number(input[2])
    let roses = 5
    let dahlias = 3.8
    let tulips = 2.8
    let narcissus = 3
    let gladiolus = 2.5

    let totalPrice = 0


    if (flower === 'Roses') {
        if (quantity > 80) {
            totalPrice = (quantity * roses) * 0.9
        } else {
            totalPrice = quantity * roses
        }
    } else if (flower === 'Dahlias') {
        if (quantity > 90) {
            totalPrice = (quantity * dahlias) * 0.85
        } else {
            totalPrice = quantity * dahlias
        }
    } else if (flower === 'Tulips') {
        if (quantity > 80) {
            totalPrice = (quantity * tulips) * 0.85
        } else {
            totalPrice = quantity * tulips
        }
    } else if (flower === 'Narcissus') {
        if (quantity < 120) {
            totalPrice = (quantity * narcissus) + (quantity * narcissus) * 0.15
        } else {
            totalPrice = quantity * narcissus
        }
    } else if (flower === 'Gladiolus') {
        if (quantity < 80) {
            totalPrice = (quantity * gladiolus) + (quantity * gladiolus) * 0.2
        } else {
            totalPrice = quantity * gladiolus
        }
    }
    let finalMoney = Math.abs(budget - totalPrice)

    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${finalMoney.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${finalMoney.toFixed(2)} leva more.`)
    }
}
