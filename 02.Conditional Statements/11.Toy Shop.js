function toysStore(input) {
let priceForExcursion = parseFloat(input[0]);
let puzzels = Number(input[1])
let dolls = Number(input[2])
let teddyBears = Number(input[3])
let minions = Number(input[4])
let trucks = Number(input[5])

let totalPrice = (puzzels * 2.6) + (dolls * 3) + (teddyBears * 4.1) + (minions * 8.2) + (trucks * 2)
let allToys = puzzels + dolls + teddyBears + minions + trucks

if (allToys >= 50) {
    totalPrice -= totalPrice * 0.25
}
totalPrice -= totalPrice * 0.1

if (totalPrice >= priceForExcursion) {
    let moneyLeft = totalPrice - priceForExcursion
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
}else {
    money_needed = priceForExcursion - totalPrice
    console.log(`Not enough money! ${money_needed.toFixed(2)} lv needed.`)
}
}
